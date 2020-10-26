from django.shortcuts import render, redirect, reverse
from django.conf import settings
from django.http import HttpResponse
import os
from pytube import YouTube
from .forms import YouTubeForm

def youtube_download(request):
  yt_form = YouTubeForm()
  error = False
  if request.POST:
    yt_form = YouTubeForm(request.POST)
    if yt_form.is_valid():
      url = yt_form.cleaned_data["url"]
      # try:
      yt = YouTube(url)
      yt_filename = f"download-{request.session.session_key[:10]}.mp4"
      streams = yt.streams.filter(progressive=True)
      for s in reversed(streams):
        # print(s)
        # print(s.filesize)
        if s.filesize <= 40 * 10**6:
          # print("filename", yt_filename[0:-4])
          s.download(os.path.join(settings.BASE_DIR, 'build/static'), yt_filename[0:-4])
          request.session["filename"] = os.path.join(settings.BASE_DIR, 'build/static', yt_filename)
          return render(request, 'youtube.html', {
            "youtube_form": yt_form,
            "downloaded_file": yt_filename,
            "filesize": s.filesize
          })
        else:
          error = "Video File must be less than 40 MB"
      # except:
      #   error = "internal error, try again"
      error = "internal error, try again"

  return render(request, 'youtube.html', {
    "youtube_form": yt_form,
    "error": error
  })


import time

def delete_file(request):
  time.sleep(5)
  yt_filename = request.session["filename"]
  try:
    del request.session["filename"]
    os.remove(yt_filename)
    # print('removed', time.time())
  except OSError:
    # print('not removed', time.time())
    pass
  return HttpResponse('complete')
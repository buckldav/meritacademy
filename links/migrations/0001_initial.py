# Generated by Django 2.1.4 on 2019-02-02 16:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('linkText', models.CharField(blank=True, max_length=200, null=True)),
                ('linkUrl', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='LinkCategory',
            fields=[
                ('id', models.CharField(max_length=50, primary_key=True, serialize=False)),
            ],
        ),
        migrations.AddField(
            model_name='link',
            name='category',
            field=models.ForeignKey(default='student', on_delete=django.db.models.deletion.CASCADE, to='links.LinkCategory'),
        ),
    ]

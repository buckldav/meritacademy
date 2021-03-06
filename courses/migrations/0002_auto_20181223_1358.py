# Generated by Django 2.1.4 on 2018-12-23 20:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CourseGroup',
            fields=[
                ('name', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('icon', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='courseGroup',
            field=models.ForeignKey(default='Capture', on_delete=django.db.models.deletion.CASCADE, to='courses.CourseGroup'),
        ),
    ]

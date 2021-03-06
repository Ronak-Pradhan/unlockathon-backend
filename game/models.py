from django.db import models
from tinymce.models import HTMLField

# Create your models here.
class Question(models.Model):
    question_number=models.PositiveIntegerField()
    question=HTMLField(max_length=200000,null=True,blank=True)
    image=models.ImageField(upload_to='questions',blank=True,null=True)
    hint=models.CharField(max_length=100)
    answer=models.CharField(max_length=200,null=True)

    def __str__(self):
        return self.question
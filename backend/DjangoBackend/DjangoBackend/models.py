from django.db import models

class Items(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.CharField(max_length=100)
    name = models.CharField(max_length=100)  
    price = models.CharField(max_length=15)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.name
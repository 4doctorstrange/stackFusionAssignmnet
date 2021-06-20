from .models import  UserModel
from rest_framework import serializers

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id','name','dob','email','phn')

    def validate(self, data):
        
        if len(data['phn'])!=10:
            print(data['phn'])
            raise serializers.ValidationError("bad phone number")
            
        else:
            return data



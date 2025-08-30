from rest_framework import serializers

class LCMRangeSerializer(serializers.Serializer):
    x = serializers.IntegerField()
    y = serializers.IntegerField()

    def validate(self, data):
        if data['x'] <= 0 or data['y'] <= 0:
            raise serializers.ValidationError({
                "error": "[ERROR-CODE-1] - The numbers must be positive."
            })
        return data

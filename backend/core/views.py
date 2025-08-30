from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services.lcm_service import LCMCalculator
from .serializers import LCMRangeSerializer


class LCMView(APIView):
    def get(self, request):
        serializer = LCMRangeSerializer(data=request.query_params)
        if serializer.is_valid():
            data = serializer.validated_data
            x = data['x']
            y = data['y']

            try:
                result = LCMCalculator.range_lcm(x, y)
                return Response({"result": result}, status=status.HTTP_200_OK)
            except ValueError as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

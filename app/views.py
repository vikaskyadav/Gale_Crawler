from django.shortcuts import render

from django.http import Http404, HttpResponse

from rest_framework.views import APIView

from rest_framework.decorators import api_view

from rest_framework.response import Response

from rest_framework import status

from django.http import JsonResponse

from django.core import serializers

from django.conf import settings

from .crawler import Crawler,CrawlerCache
import re

import json

# Create your views here.

# @api_view(["GET"])

def HelloWorld(request):
    return JsonResponse({"img":['https://teamgraph.io/static/canvas/images/report_image_browser.png','https://teamgraph.io/static/canvas/images/report_image_browser.png'],"url":"abc"})
@api_view(["POST"])

def IdealWeight(heightdata):

    try:
        crawler = Crawler(CrawlerCache('crawler.db'))
        root_re = re.compile('^/$').match
        # res = crawler.crawl('http://techcrunch.com/',2, no_cache=root_re)

        data =json.loads(heightdata.body.decode('utf-8'))
        url = data['url']
        depth = data['depth']
        if url and depth:
            res = crawler.crawl(url,depth, no_cache=root_re)

        if res:
            ans = {"url": url, "images": res}
            return JsonResponse(ans)

    except ValueError as e:

        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)
import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

pb = re.search(r'<section [^>]*class=\"[^\"]*weflair-playbooks[^\"]*\"[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)
rt = re.search(r'<section [^>]*class=\"[^\"]*weflair-resources-teaser[^\"]*\"[^>]*>.*?</section>', html, re.IGNORECASE | re.DOTALL)

title_pb = re.search(r'<h[1-6][^>]*>(.*?)</h[1-6]>', pb.group(0), re.IGNORECASE | re.DOTALL) if pb else None
title_rt = re.search(r'<h[1-6][^>]*>(.*?)</h[1-6]>', rt.group(0), re.IGNORECASE | re.DOTALL) if rt else None

print("Playbooks title:", title_pb.group(1).strip() if title_pb else "None")
print("Resources title:", title_rt.group(1).strip() if title_rt else "None")

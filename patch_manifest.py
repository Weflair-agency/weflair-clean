import re

manifest_path = 'site-manifest.cjs'
with open(manifest_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace Automations & Tools in footerColumns
text = re.sub(r'\{\s*label:\s*"Automations & Tools",\s*href:\s*"/tools\.html"\s*\}', '{ label: "Automation Pack", href: "/resource-pack.html" }', text)

# Add route for resource-pack
route_block = '''{
      file: "resource-pack.html",
      path: "/resource-pack.html",
      title: "Automation Pack | WeFlair",
      description: "Download our free skills, automations and tools to boost your business performance.",
      pageType: "contact",
      schemaType: "ContactPage",
      group: "Company",
      label: "Automation Pack",
      includeInXml: true,
    },
    {
      file: "contact.html",'''
      
text = re.sub(r'\{\s*file:\s*"contact\.html",', route_block, text)

with open(manifest_path, 'w', encoding='utf-8') as f:
    f.write(text)

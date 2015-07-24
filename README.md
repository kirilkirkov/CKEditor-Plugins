# CKEditor-Plugins
## What plugins have:
* **Alerts** -  With this plugin you can add bootstrap styled alerts.

## Plugins installation:
1. Copy plugin directory into /ckeditor/plugins/
2. Add this > config.extraPlugins = '**PLUGIN NAME**'; line into **config.js**
3. Name of your text area must be in this code into **plugin_name_directory/plugin.js** 
 1. var element = CKEDITOR.dom.element.createFromHtml(value );
	       CKEDITOR.instances.editor1.insertElement( element );
*** Where editor1 is name of textarea in your html !... **editor1 is default name. if you can dont change it !**

1. Item 1
  1. A corollary to the above item.
  2. Yet another point to consider.

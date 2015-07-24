# CKEditor-Plugins
## What plugins have:
* **Alerts** -  With this plugin you can add bootstrap styled alerts.

## Plugins installation:
* Copy plugin directory into /ckeditor/plugins/
* Add this > config.extraPlugins = '**PLUGIN NAME**'; line into **config.js**
* Name of your text area must be in this code into **plugin_name_directory/plugin.js** 
⋅⋅* var element = CKEDITOR.dom.element.createFromHtml(value );
	       CKEDITOR.instances.editor1.insertElement( element );
*** Where editor1 is name of textarea in your html !... **editor1 is default name. if you can dont change it !**

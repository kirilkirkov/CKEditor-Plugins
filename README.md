# CKEditor-Plugins

### What is CKEditor?

CKEditor is a WYSIWYG text editor. See [the official site](http://ckeditor.com/) for more details.


## What plugins have:
* **Alerts** -  With this plugin you can add bootstrap styled alerts.

### Tested on **ckeditor 4.5.1**, **Ubuntu 14.04**, **Redmine 3.0.4.stable**

## Plugins installation:
1. Copy plugin directory into /ckeditor/plugins/**pluginName**
2. Add this line into **config.js**
 * config.extraPlugins = '**pluginName**';
3. Name of your text area must be in this code into /ckeditor/plugins/**pluginName/plugin.js** 
 * CKEDITOR.instances.editor1.insertElement( element );
   * Where editor1 is name of textarea in your html !... **editor1 is default name. if you can dont change it !**

## Plugin installation for Redmine (tested on **Ubuntu**)
You can download plugins from [Add-ons Repository](http://ckeditor.com/addons/plugins/all). To activate the plugin you have to copy the plugin directory into assets/ckeditor-contrib/plugins and restart Redmine, then configure toolbar settings.

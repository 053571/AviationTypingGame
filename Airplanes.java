class Airplanes
{

	public void test(String name)
	{
		Log.i(TAG, "Hello " + name);
	}
}

webview.addJavascriptInterface(new Airplanes(), "HELLO");
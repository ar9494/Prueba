using System;
using System.Net.Http;
using TMPro;
using UnityEngine;

public class AppManager : MonoBehaviour
{
    public TextMeshProUGUI hourText;
    public GameObject errorPopupGO;
    public async void getTime()
    {
        try
        {
            string url = "http://localhost:3000/getTime";

            using (var httpClient = new HttpClient())
			{
                var response = await httpClient.GetAsync(url);
                if (response.IsSuccessStatusCode)
                    hourText.text = await response.Content.ReadAsStringAsync();
                else
                    errorPopupGO.SetActive(true);

            }
        }
        catch (Exception e)
        {
            errorPopupGO.SetActive(true);
            Debug.LogError(e.StackTrace);
        }
    }
}

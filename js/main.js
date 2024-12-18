var siteNameInput=document.getElementById("validationServer01");
var siteURLInput=document.getElementById("validationServer02");
var sitesContainer=[];
var nameRegex= /^\w{3,}(\s+\w+)*$/;
var URLRegex=/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

if(localStorage.getItem("site"))
{
    sitesContainer=JSON.parse(localStorage.getItem("site"));
    displayBookMark();
}

function addBookMark()
{
    if(siteNameInput.classList.contains("is-valid")&&siteURLInput.classList.contains("is-valid"))
    {
        if(siteURLInput.value.includes("https://")==false&&siteURLInput.value.length>0)
        {
            siteURLInput.value="https://"+siteURLInput.value;
        }

        var site={
            siteName:siteNameInput.value,
            siteURL:siteURLInput.value
        }
        sitesContainer.push(site);
        localStorage.setItem("site",JSON.stringify(sitesContainer));
        clearForm();
        displayBookMark();
    }
    else
    {
        window.alert(`Site Name or Url is not valid, Please follow the rules below :

        1-Site name must contain at least 3 characters
        2-Site URL must be a valid one`)
    }
}

function displayBookMark()
{
    var cartona=``;
    for(var i=0;i<sitesContainer.length;i++)
        {
            cartona+=`
        <tr>
            <td class="text-capitalize">${i+1}</td>
            <td class="text-capitalize">${sitesContainer[i].siteName}</td>
            <td>
                <a href="${sitesContainer[i].siteURL}" target="_blank">
                    <button class="btn btn-warning btn-visit" data-index="0" fdprocessedid="gmk4x">
                        <i class="fa-solid fa-eye pe-2"></i>Visit
                    </button>
                </a>
                  
            </td>
            <td>
                <button onclick="deleteSite(${i})" class="btn btn-danger btn-delete pe-2" data-index="0" fdprocessedid="coa9a">
                  <i class="fa-solid fa-trash-can"></i>
                  Delete
                </button>
            </td>
        </tr>`
    }
    document.getElementById("tableContent").innerHTML=cartona;
}

function clearForm()
{
    siteNameInput.value=null;
    siteURLInput.value=null;
    siteNameInput.classList.remove("is-valid");
    siteURLInput.classList.remove("is-valid");
}

function deleteSite(i)
{
    sitesContainer.splice(i,1);
    localStorage.setItem("site",JSON.stringify(sitesContainer));
    displayBookMark();
}

function validate(input,regex)
{
  var testRegex = regex;
  if (testRegex.test(input.value))
    {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
    else
    {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
}
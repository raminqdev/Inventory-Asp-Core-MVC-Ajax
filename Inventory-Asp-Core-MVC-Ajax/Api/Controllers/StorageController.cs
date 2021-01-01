﻿using AspNetCore.Lib.Attributes;
using AspNetCore.Lib.Enums;
using AspNetCore.Lib.Models;
using Inventory_Asp_Core_MVC_Ajax.Businesses.common;
using Inventory_Asp_Core_MVC_Ajax.Models;
using Inventory_Asp_Core_MVC_Ajax.Models.Classes;
using InventoryProject.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;
using PagedList.Core;
using System.Threading.Tasks;

namespace Inventory_Asp_Core_MVC_Ajax.Api.Controllers
{
    public class StorageController : Controller
    {
        public readonly IStorageBiz storageBiz;

        public StorageController(IStorageBiz storageBiz)
        {
            this.storageBiz = storageBiz;
        }


        #region Storages

        [HttpGet, ActionName("Storages")]
        public async Task<IActionResult> Storages(string query, int? page = null) =>
            View(await GetSearchStorage(page, query));


        private async Task<StorageFilterModel> GetSearchStorage(int? page = null, string searchQuery = null)
        {
            var storageResults = await storageBiz.List(new PagingModel()
            {
                PageNumber = (page == null || page <= 0 ? 1 : page.Value) - 1,
                PageSize = 8,
                Sort = "LastModified",
                SortDirection = SortDirection.DESC
            }, searchQuery);
            if (!storageResults.Success)
                return null;
            return new StorageFilterModel()
            {
                StorageModels = new StaticPagedList<StorageModel>(storageResults.Items,
                storageResults.PageNumber + 1, storageResults.PageSize, (int)storageResults.TotalCount),
                SearchQuery = searchQuery
            };
        }

        #endregion

        #region Search

        //[HttpGet, ActionName("Search")]
        //public async Task<IActionResult> Search(string PageNumber, [Bind] StorageFilterModel filterModel)
        //{
        //    var storageResults = await storageBiz.Search(filterModel);
        //    if (!storageResults.Success)
        //    {
        //        return View();
        //    }
        //    ViewBag.PageSize = storageResults.PageSize;
        //    ViewBag.CurrentPage = storageResults.PageNumber;
        //    ViewBag.TotalItemCount = storageResults.TotalCount;
        //    return View(storageResults.Data);
        //}

        #endregion

        #region AddOrEditStorage

        [HttpGet, ActionName("AddOrEditStorage")]
        [NoDirectAccess]
        public async Task<IActionResult> AddOrEdit(int id = 0)
        {
            if (id == 0)
            {
                return View(new StorageModel());
            }
            else
            {
                var storageResult = await storageBiz.GetById(id);
                if (!storageResult.Success)
                    return NotFound();
                return View(storageResult.Data);
            }
        }


        [HttpPost, ActionName("AddOrEditStorage")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddOrEdit(int id, [Bind] StorageModel model)
        {
            if (!ModelState.IsValid)
                return Json(this.HtmlReponse(view: "AddOrEditStorage", model, Result.Failed(Error.WithCode(ErrorCodes.InvalidModel))));
            if (id == 0)
            {
                var result = await storageBiz.Add(model);
                if (!result.Success)
                    return Json(this.HtmlReponse(view: "AddOrEditStorage", model, result));
            }
            else
            {
                var result = await storageBiz.Edit(model);
                if (!result.Success)
                    return Json(this.HtmlReponse(view: "AddOrEditStorage", model, result));
            }
            return Json(this.HtmlReponse(view: "_Storages", model: await GetSearchStorage()));
        }

        #endregion

        #region Delete

        [HttpPost, ActionName("DeleteStorage")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await storageBiz.Delete(id);
            if (!result.Success)
                return Json(this.HtmlReponse("_Storages", null, result));
            return Json(this.HtmlReponse("_Storages", await GetSearchStorage()));
        }

        #endregion

        #region IsNameInUse

        [AcceptVerbs("Get", "Post")]
        public async Task<JsonResult> IsNameInUse(string name) =>
            (await storageBiz.IsNameInUse(name)).Data ? Json($"Name {name} is already in use.") : Json(true);

        #endregion

    }
}

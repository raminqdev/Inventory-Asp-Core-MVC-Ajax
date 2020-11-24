﻿using Helper.Library.Models;
using Inventory_Asp_Core_MVC_Ajax.Models.Classes;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Inventory_Asp_Core_MVC_Ajax.Businesses.Interfaces
{
    public interface IImageBiz
    {
        Task<Result<StorageModel>> GetStoreProductsAndImages(int productId);
        Task<Result> AddImages(IList<ImageModel> imageModels);
        Task<Result<ImageModel>> GetById(int id);
        Task<Result> Delete(int id);
    }
}
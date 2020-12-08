﻿using AspNetCore.Lib.Models;
using Inventory_Asp_Core_MVC_Ajax.Models.Classes;
using System.Threading.Tasks;

namespace InventoryProject.Business.Interfaces
{
    public interface IStorageBiz
    {
        Task<Result> Add(StorageModel model);
        Task<Result> Delete(int id);
        Task<Result> Edit(StorageModel model);
        Task<Result<StorageModel>> GetById(int id);
        Task<ResultList<StorageModel>> List(PagingModel pagingModel, string searchQuery);
        Task<Result<StorageModel>> ListStorageAndProductsByStoreId(int storeId);
        Task<bool> ExistsWithName(string name);
        //Task<ResultList<StorageModel>> Search(StorageFilterModel filterModel);

    }
}
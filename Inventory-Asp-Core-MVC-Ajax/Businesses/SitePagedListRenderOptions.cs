﻿

using PagedList.Core.Mvc;

namespace Inventory_Asp_Core_MVC_Ajax.Businesses
{
    public class SitePagedListRenderOptions
    {
        public static PagedListRenderOptions Boostrap4
        {
            get
            {
                var option = PagedListRenderOptions.Bootstrap4Full;

                option.MaximumPageNumbersToDisplay = 5;

                return option;
            }
        }
    }
}
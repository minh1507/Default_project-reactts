import request from "common/Request"
const Por_SuKien = "Por_SuKien";
const SuKienService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_SuKien}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
            method: 'get'
        });
        return res
    },
    GetItemstim: async () => {
        let res: any = await request({
          url: `/${Por_SuKien}/DanhSach`,
          method: "get",
        });
        return res;
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_SuKien}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_SuKien}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_SuKien}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_SuKien}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_SuKien}`,
            method: 'delete',
            data        
        });
        return res
    },
}
export default SuKienService

import request from "common/Request"
const Por_GiaoVien = "Por_GiaoVien";
const QuanLyGiaoVienService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_GiaoVien}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_GiaoVien}/Categories`,
            method: 'get'
        });
        return res
    },
    GetList: async () => {        
        let res:any = await request({
            url: `/${Por_GiaoVien}/List`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_GiaoVien}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_GiaoVien}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_GiaoVien}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_GiaoVien}`,
            method: 'delete',
            data        
        });
        return res
    },
}
export default QuanLyGiaoVienService

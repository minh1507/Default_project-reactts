import request from "common/Request"
const Por_MonHoc = "Por_MonHoc";
const MonHocService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_MonHoc}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_MonHoc}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_MonHoc}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_MonHoc}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_MonHoc}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_MonHoc}`,
            method: 'delete',
            data
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any) => {
        let res:any = await request({
          url: `/${Por_MonHoc}/CheckDuplicateAttributes?Id=${id}&Code=${code}`,
          method: 'get'
        })
        return res;
    },
    CheckDuplicateAttributesCreateNew: async (code:any) => {
        let res:any = await request({
          url: `/${Por_MonHoc}/CheckDuplicateAttributes?Code=${code}`,
          method: 'get'
        })
        return res;
    }
}
export default MonHocService

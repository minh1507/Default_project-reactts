import request from "common/Request"
const Por_NhomSuKien = "Por_NhomSuKien";
const QuanLyNhomSuKien = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_NhomSuKien}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_NhomSuKien}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_NhomSuKien}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_NhomSuKien}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_NhomSuKien}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_NhomSuKien}`,
            method: 'delete',
            data
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, ma:any) => {
        let res:any = await request({
          url: `/${Por_NhomSuKien}/CheckDuplicateAttributes?id=${id}&ma=${ma}`,
          method: 'get'
        })
        return res;
    },
    CheckDuplicateAttributesCreateNew: async (ma:any, idNhomSuKien: any) => {
        let res:any = await request({
          url: `/${Por_NhomSuKien}/CheckDuplicateAttributes?ma=${ma}&idNhomSuKien=${idNhomSuKien}`,
          method: 'get'
        })
        return res;
    }
}
export default QuanLyNhomSuKien

import request from "common/Request"
const Por_NhomTinTuc = "Por_NhomTinTuc";
const QuanLyNhomTinTuc = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_NhomTinTuc}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_NhomTinTuc}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_NhomTinTuc}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_NhomTinTuc}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_NhomTinTuc}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_NhomTinTuc}`,
            method: 'delete',
            data
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, ma:any) => {
        let res:any = await request({
          url: `/${Por_NhomTinTuc}/CheckDuplicateAttributes?id=${id}&ma=${ma}`,
          method: 'get'
        })
        return res;
    },
    CheckDuplicateAttributesCreateNew: async (ma:any, idMonHocCha: any) => {
        let res:any = await request({
          url: `/${Por_NhomTinTuc}/CheckDuplicateAttributes?ma=${ma}&idMonHocCha=${idMonHocCha}`,
          method: 'get'
        })
        return res;
    }
}
export default QuanLyNhomTinTuc

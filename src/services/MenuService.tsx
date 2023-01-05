import request from "common/Request"
const Por_Menu = "Por_Menu";

const MenuService =  {
    GetByParentId: async (idMenuCha:any) => {
        let res:any = await request({
          url: `/${Por_Menu}/List/${idMenuCha}`,
          method: 'get'
        })
        return res;
    },
    GetItem: async (id:String) => {        
      let res:any = await request({
          url: `/${Por_Menu}/${id}`,
          method: 'get'
      });
      return res
    },   
    GetTree: async () => {
        let res:any = await request({
          url: `/${Por_Menu}/Tree`,
          method: 'get'
        })
        return res;
    },
    CreateItem: async (data:any) => {        
    let res:any = await request({
        url: `/${Por_Menu}`,
        method: 'post',
          data
        });
        return res
    },   
    CheckDuplicateAttributes: async (id:any, ma:any, idMenuCha:any) => {
      let res:any = await request({
        url: `/${Por_Menu}/CheckDuplicateAttributes?id=${id}&ma=${ma}&idMenuCha=${idMenuCha}`,
        method: 'get'
      })
      return res;
    }   
}

export default MenuService;
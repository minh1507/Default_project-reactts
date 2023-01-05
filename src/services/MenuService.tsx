import request from "common/Request"
const Por_Menu = "Por_Menu";

const MenuService =  {
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
}

export default MenuService;
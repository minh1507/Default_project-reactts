import request from "common/Request"
const Cat = "cat";
const CatService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Cat}`,
            method: 'get'
        });
        return res
    },
   
}
export default CatService

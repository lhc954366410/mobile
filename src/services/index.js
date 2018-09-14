import xhr from '../utils/xhr'

class services {

    async MALL000107({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MALL000107',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MALL000202({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MALL000202',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MALL000204({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MALL000204',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MALL000302({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MALL000302',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MALL000303({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MALL000303',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MDM000206({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MDM000206',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MDM000207({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MDM000207',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MDM000405({ Content = {},Method = 'Q', page = 1, rows = 9, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MDM000405',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MDM001505({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MDM001505',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MDM002905({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MDM002905',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
    async MDM002906({ Content = {},Method = 'Q', page = 1, rows = 10, sidx, sord = 'asc' } = {}) {
        let dataInfo = await xhr('MDM002906',{
            method: 'POST',
            body:{
                Method, 
                page, 
                rows, 
                sidx, 
                sord,
                Content
            }
        })
        return dataInfo || {};
    }
}
export default new services();

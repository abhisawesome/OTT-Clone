import reducer from "../movie";


describe('Reducer Tests',()=>{
    test('set loading',()=>{
        const result = reducer(undefined,{type:'set_loading',payload:true});
        expect(result.isLoading).toEqual(true)
    })
    test('case: payload empty => add movie data',()=>{
        const result = reducer(undefined,{type:'add_movie_data'});
        expect(Object.keys(result.data).length).toEqual(0)
    })
    test('case: empty title => add movie data',()=>{
        const result = reducer(undefined,{type:'add_movie_data',payload:{}});
        expect(Object.keys(result.data).length).toEqual(0)
    })
    test('case: Has name but no other data',()=>{
        const result = reducer(undefined,{type:'add_movie_data',payload:{
            title:'test'
        }});
        expect(Object.keys(result.data).length).toEqual(1)
        expect(result.data.test.length).toEqual(0)
    })
    test('case: search name is present',()=>{
        const options = {
            currentPage:{
                title:'test'
            },
            data:{
                test:[
                   {
                    name: 'Test'
                   }
                ],
                'test-2':[
                    {
                       name: 'Test-2'
                    }
                ]
            },
            movieListFull:{
                test:[
                    {
                     name: 'Test'
                    }
                 ],
                 'test-2':[
                     {
                        name: 'Test-2'
                     }
                 ]
            }
        }
        const result = reducer(options,{type:'search_movie',payload:{
            movieName:'test'
        }});
        expect(result.data['test'].length).toEqual(1)
    })
    test('case: search name is null return every movie list',()=>{
        const options = {
            currentPage:{
                title:'test'
            },
            data:{
                test:[
                   {
                    name: 'Test'
                   }
                ],
                'test-2':[
                    {
                       name: 'Test-2'
                    }
                ]
            },
            movieListFull:{
                test:[
                    {
                     name: 'Test'
                    }
                 ],
                 'test-2':[
                     {
                        name: 'Test-2'
                     }
                 ]
            }
        }
        const result = reducer(options,{type:'search_movie',payload:{
            movieName: null
        }});
        expect(Object.keys(result.data).length).toEqual(2)
    })
})


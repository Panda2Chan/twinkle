
declare namespace Common {

  interface IPageProps<
    Params = Dict<string | undefined>,
    SearchParams = Dict<string | string[] | undefined>,
  > {
    params: Params
    searchParams: SearchParams
  }

}
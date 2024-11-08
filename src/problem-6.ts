interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile( orginalObj : Profile , updatObj: Partial<Profile> ) :Profile {
    return  {...orginalObj, ...updatObj};
  }
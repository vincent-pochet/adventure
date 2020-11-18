function handleErrors(response) {
  if (!response.ok) {
    console.log(response);
    throw Error(response.status);
  }
  return response;
}

function redirectToErrors(error) {
  if (error.message == '401')
    router.replace('/session');
  else if (error.message == '403')
    window.location.href = "/403";
  else if (error.message == '404')
    router.replace('/404');
  else
    window.location.href = "/500";
}

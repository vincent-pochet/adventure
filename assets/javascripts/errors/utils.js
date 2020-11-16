function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
}

function redirectToErrors(error) {
  if (error.message == '403' || error.message == '401')
    window.location.href = "/403";
  else if (error.message == '404')
    router.replace('/404');
  else
    window.location.href = "/500";
}

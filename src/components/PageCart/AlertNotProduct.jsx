export default function AlertNotProduct(params) {
  return (
    <div className="w-full px-4  xl:w-8/12 xl:mb-0 h-[150px] ">
      <div className="md:px-6">
        <div
          id="alert-border-3"
          class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-[#17130F] dark:border-green-800"
          role="alert"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div class="ml-3 text-sm font-medium">
            No se han encontrado productos en el{" "}
            <span href="#" class="font-semibold underline hover:no-underline">
              carrito
            </span>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

const Form = () => {
  return (
    <section className="mt-24 px-6">
      <form>
        <div className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor=""
              className="uppercase text-xs tracking-[0.15em] text-Verydarkviolet font-semibold "
            >
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="e.g. Jane Appaleseed"
              className="block border outline-none text-[1.10rem] border-Lightgrayishviolet rounded-md px-4 py-2 w-full placeholder:text-Lightgrayishviolet focus:border-Verydarkviolet"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor=""
              className="uppercase text-xs tracking-[0.15em] text-Verydarkviolet font-semibold "
            >
              Card Number
            </label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              className="block border outline-none text-[1.10rem] border-Lightgrayishviolet rounded-md   px-4 py-2 w-full placeholder:text-Lightgrayishviolet "
            />
          </div>
          <div className="flex gap-2">
            <div className="space-y-1  flex-1">
              <label
                htmlFor=""
                className="uppercase text-xs tracking-[0.15em] text-Verydarkviolet font-semibold "
              >
                EXP. Date (MM/YY)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM"
                  className="block border outline-none text-[1.10rem] border-Lightgrayishviolet rounded-md   px-4 py-2 w-full placeholder:text-Lightgrayishviolet "
                />
                <input
                  type="text"
                  placeholder="YY"
                  className="block border outline-none text-[1.10rem] border-Lightgrayishviolet rounded-md   px-4 py-2 w-full placeholder:text-Lightgrayishviolet "
                />
              </div>
            </div>
            <div className="space-y-1 flex-1">
              <label
                htmlFor=""
                className="uppercase text-xs tracking-[0.15em] text-Verydarkviolet font-semibold "
              >
                CVC
              </label>
              <input
                type="text"
                placeholder="e.g. 123"
                className="block border outline-none text-[1.10rem] border-Lightgrayishviolet rounded-md   px-4 py-2 w-full placeholder:text-Lightgrayishviolet "
              />
            </div>
          </div>
        </div>

        <button className="w-full bg-Verydarkviolet text-Lightgrayishviolet p-3 rounded-lg mt-6">
          Confirm
        </button>
      </form>
    </section>
  );
};

export default Form;
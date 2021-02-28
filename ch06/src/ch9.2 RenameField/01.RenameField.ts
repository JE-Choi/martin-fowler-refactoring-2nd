{
    /**
     * 요구사항: organization의 name속성을 title로 변경하고 싶음
     */
    // 변수를 클래스로 캡슐화
    class Organization {
        private _name: string = "";
        private _country: string = "";

        constructor(data: { name: string, country: string }) {
            this._name = data.name;
            this._country = data.country;
        }

        get name() {
            return this._name;
        }

        set name(aString) {
            this._name = aString;
        }

        get country() {
            return this._country;
        }

        set country(aCountryCode) {
            this._country = aCountryCode;
        }
    }

    function makeString(): string {
        const organization: Organization = new Organization({name: "애크미 구스베리", country: "GB"});
        return `${organization.name}: ${organization.country}`;
    }

    console.log(makeString());
}
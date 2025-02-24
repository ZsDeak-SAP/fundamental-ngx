export class StackblitzDependencies {
    private static _libDependencies: string[] = [
        '@fundamental-ngx/cdk',
        '@fundamental-ngx/platform',
        '@fundamental-ngx/core',
        '@fundamental-ngx/i18n'
    ];

    private static _ngDependencies: string[] = [
        '@angular/animations',
        '@angular/cdk',
        '@angular/core',
        '@angular/compiler',
        '@angular/compiler-cli',
        '@angular/common',
        '@angular/forms',
        '@angular/router',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular-devkit/build-angular',
        '@angular/cli'
    ];

    private static _dependencies: string[] = [
        'rxjs',
        '@sap-theming/theming-base-content',
        'core-js',
        'focus-trap',
        'fundamental-styles',
        'dayjs',
        'moment',
        'tslib',
        'typescript',
        'fast-deep-equal',
        'lodash-es'
    ];

    static getDependencies(packageInfo: Record<string, any>, lernaInfo: Record<string, any>): Record<string, any> {
        const _dependencies: Record<string, any> = {};

        this._libDependencies.forEach((libDep) => (_dependencies[libDep] = lernaInfo.version));

        [...this._dependencies, ...this._ngDependencies].forEach((dep) => {
            if (packageInfo.dependencies && packageInfo.dependencies[dep]) {
                _dependencies[dep] = packageInfo.dependencies[dep];
            } else if (packageInfo.devDependencies && packageInfo.devDependencies[dep]) {
                _dependencies[dep] = packageInfo.devDependencies[dep];
            } else {
                throw new Error('Dependency ' + dep + ' not found in package.json');
            }
        });

        return _dependencies;
    }
}

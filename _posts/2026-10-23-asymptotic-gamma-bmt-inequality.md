---
layout: paper
title: An asymptotic $Γ$-BMT inequality
title_ja: 漸近的Γ-BMT不等式とDonaldson–Thomas不変量の階数還元
authors: Nick Rekuski
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We refine a bound of Cheng-Feyzbakhsh to prove an asymptotic $\Gamma$-Bayer-Macr\`i-Toda ($\Gamma$-BMT) inequality on every smooth polarized complex threefold. The proof relies on a reduction to small tilt stability parameters. Using this inequality we verify Feyzbakhsh-Thomas's condition $(wBG)$ whenever $K_{X}$ is numerically proportional to the polarization. For polarized Calabi-Yau threefolds, this yields a reduction of positive rank generalized Donaldson-Thomas (DT) invariants to those counting sheaves pure in codimension one. We further express these invariants in terms of rank one generalized DT invariants. Thus, the rank reductions of Feyzbakhsh-Thomas hold without assuming the BMT conjecture.
topic: algebraic-geometry
tags:
- stability
- chern-classes
- vector-bundles-sheaves
- calabi-yau-geometry
arxiv_id: 2610.31399v1
arxiv_url: https://arxiv.org/abs/2610.31399
arxiv_submitted: '2026-10-22'
arxiv_updated: '2026-10-22'
summary: 滑らかな偏極複素三次元多様体上で、tilt半安定対象の第3 Chern指標を抑える漸近的Γ-BMT不等式を示す。標準束が偏極と数値的に比例する場合の弱いBG条件を導き、Calabi–Yau三次元多様体の非負階数DT不変量を階数1の不変量へ還元する。全面的なBMT予想を仮定せず、この還元に必要な評価を確保する点が主眼である。
abstract_en: We refine a bound of Cheng-Feyzbakhsh to prove an asymptotic $\Gamma$-Bayer-Macr\`i-Toda ($\Gamma$-BMT) inequality on every smooth polarized complex threefold. The proof relies on a reduction to small tilt stability parameters. Using this inequality we verify Feyzbakhsh-Thomas's condition $(wBG)$ whenever $K_{X}$ is numerically proportional to the polarization. For polarized Calabi-Yau threefolds, this yields a reduction of positive rank generalized Donaldson-Thomas (DT) invariants to those counting sheaves pure in codimension one. We further express these invariants in terms of rank one generalized DT invariants. Thus, the rank reductions of Feyzbakhsh-Thomas hold without assuming the BMT conjecture.
summary_en: ''
abstract_ja: Cheng–Feyzbakhshの評価を精密化し、すべての滑らかな偏極複素三次元多様体に対して漸近的Γ-BMT不等式を得る。これにより、標準因子が偏極に数値的に比例するときに弱いBG条件を検証する。偏極Calabi–Yau三次元多様体では、正階数の一般化DT不変量を余次元1に純な層の不変量へ、さらに階数1の一般化DT不変量へ表せるため、Feyzbakhsh–Thomasの階数還元からBMT予想の仮定を除ける。
abstract_source_url: https://arxiv.org/abs/2610.31399
license_name: CC0 1.0 Universal
license_url: http://creativecommons.org/publicdomain/zero/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.31399v1](https://arxiv.org/abs/2610.31399)
- **著者:** Nick Rekuski
- **初回投稿日:** 2026-10-22
- **最終更新日:** 2026-10-22
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

三次元多様体の安定性条件では、古典的なBogomolov–Gieseker不等式だけでなく、第3 Chern指標を制御する評価が必要になる。本論文は、任意の滑らかな偏極複素三次元多様体に対し、安定性のパラメータが一定以上の領域で使える不等式を与える。

得られるのは、対象やパラメータに依存しない補正類を許したΓ-BMT型評価である。すべてのパラメータでの予想を直接解くことが目的ではなく、既存評価の主要係数を改善して、列挙不変量の計算に必要な範囲を取り出す。

その応用として、Calabi–Yau三次元多様体の一般化Donaldson–Thomas不変量を階数1の不変量の多項式に表す。Introductionは同時期のLi–Liu–Perry–Zhaoの仕事がより強いΓ-BMT予想と同じDT理論への応用を与えることも明記する。本論文の位置づけは、漸近的な不等式だけでも階数還元に十分であることを示す点にある。

## 背景と問題設定

$X$は滑らかな射影複素三次元多様体、$H$は整係数の豊富因子であり、原始的であることは仮定しない。$\operatorname{ch}^B(E)=e^{-B}\operatorname{ch}(E)$をねじれたChern指標とする。$\nu^D\_{b,w}$と$\operatorname{Coh}^D\_b(X)$は論文で採用するtilt slopeとtiltした心臓部を表し、パラメータ規約はFeyzbakhsh–Thomasに従う。

BMT型不等式はBridgeland安定性や曲線計数に関係するが、元の不等式は一般には成立しない。固定された補正類$\Gamma$を入れる方法や、DT不変量の階数還元に十分な弱い条件(wBG)が研究されてきた。

## 主結果

### 漸近的Γ-BMT不等式（Theorem A）

$D=\tfrac12K\_X$と置くと、$t\_0>0$と$\Gamma\in N^2(X)\_{\mathbb Q}$が存在し、

$$
w-\frac12b^2\geq t\_0,\qquad \nu^D\_{b,w}(E)=b
$$

を満たす任意の$\nu^D\_{b,w}$半安定対象$E\in\operatorname{Coh}^D\_b(X)$について

$$
\operatorname{ch}^{D+bH}\_3(E)
\leq \frac{w-\tfrac12b^2}{3}\thinspace H^2\cdot\operatorname{ch}^{D+bH}\_1(E)
+\Gamma\cdot\operatorname{ch}^{D+bH}\_1(E)
$$

が成り立つ。$t\_0$と$\Gamma$は$E$にも$(b,w)$にも依存しない。固定補正項を許すことで主要係数をBMT予想と同じ値にする一方、$w-\tfrac12b^2$に下限を置く漸近的な主張である。

### 弱いBG条件への応用（Proposition B）

$K\_X\equiv\lambda H$となる$\lambda\in\mathbb Q$が存在すれば、$(X,H)$はFeyzbakhsh–Thomasの条件(wBG)を満たす。とくに偏極Calabi–Yau三次元多様体でこの条件が成立し、正階数のGieseker半安定層を数える一般化DT不変量を、余次元1に純な層を数える不変量へ還元できる。

### 階数1の不変量による表示（Theorem C）

ここでCalabi–Yauとは$K\_X\simeq\mathcal O\_X$かつ$H^1(X,\mathcal O\_X)=0$を満たすものをいう。任意の$v\in K\_{\mathrm{num}}(X)$で$\operatorname{ch}\_0(v)\geq0$となるものに対し、階数1の数値類$\beta\_1,\ldots,\beta\_m$と有理係数多項式$P\_v$が存在して

$$
J(v)=P\_v\bigl(J(\beta\_1),\ldots,J(\beta\_m)\bigr),\qquad
\operatorname{ch}\_0(\beta\_i)=1
$$

となる。$J$はJoyce–Songの一般化DT不変量であり、多項式は$v$、偏極多様体、次数付き環$H^\bullet(X,\mathbb Q)$に依存する。非負階数全体を階数1の計数へ結びつける構造的還元である。

## 証明の見取り図

Introductionによれば、Cheng–Feyzbakhshの不等式に既存のパラメータ還元法を適用し、小さいtiltパラメータ側への還元を通じて評価を改善する。DT理論ではFeyzbakhsh–Thomasの壁越え戦略を維持し、必要な数値評価をTheorem Aから供給する。したがって壁越えの枠組みを作り直すのではなく、予想に依存していた入力を漸近定理で置き換える。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.31399)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.31399v1) — Section 1、PDF pp. 1–2。
- **Introduction中で言及された主要結果:** Theorem A (=3.3)、Proposition B (=4.4)、Theorem C (=5.6)。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.31399v1
- **確認したライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)
- **source\_scope:** Abstract and Introduction

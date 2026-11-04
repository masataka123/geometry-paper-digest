---
layout: paper
title: Hodge--Riemann relations for $m$-positive and generalized $m$-positive forms
title_ja: 部分正値形式に対する混合Hodge–Riemann関係
authors: Enhan Li
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: We study Hodge--Riemann relations for ordinary, sequential, and weak $m$-positive real $(1,1)$-forms in complex dimension $d$. For ordinary $m$-positive forms, we prove the fully mixed relations in every permitted bidegree without assuming semipositivity, generalizing results by Xiao. As a generalization of ordinary $m$-positivity, sequential $m$-positivity is defined by the hyperbolicity cones of successive directional derivatives of the determinant. We formulate a generalized mixed Hodge--Riemann conjecture for this condition and prove several cases beyond the scalar inequalities supplied by hyperbolicity. We also consider weak $m$-positivity which corresponds to the pointwise subsolution condition for the complex $m$-Hessian equation. In this setting, we prove the Hodge--Riemann relations for $p\neq q$ and in several diagonal cases, and show that the associated power map induces a pointwise diffeomorphism onto the cone of positive $(d-1,d-1)$-forms. Using Dinh and Nguy\^en's
  $L^2$ globalization method, we pass from the pointwise relations to cohomology classes on compact K\"ahler manifolds. Finally, we propose conjectures on a numerical criterion for sequential positivity and on solvability of the generalized $m$-Hessian equation.
topic: algebraic-geometry
tags:
- hodge-theory
- positivity
- monge-ampere-equations
- l2-methods
arxiv_id: 2611.03124v1
arxiv_url: https://arxiv.org/abs/2611.03124
arxiv_submitted: '2026-11-02'
arxiv_updated: '2026-11-02'
summary: 半正値とは限らないm-positiveな形式に対して、許される全双次数の混合Hodge–Riemann関係を示す。逐次的正値性と弱いm正値性にも理論を広げるが、一般の高次数の主張には未解決の予想が残る。点ごとのLefschetz構造をコンパクトKähler多様体のコホモロジーへ移す。
abstract_en: ''
summary_en: The work asks which portions of the Lefschetz package survive when a positive form is allowed to have negative eigenvalues. For ordinary m-positive forms it removes a semipositivity assumption from the fully mixed statement. Two larger frameworks, based on sequential hyperbolicity cones and on hyperplane restrictions, yield additional theorems but also specific unresolved cases. The distinction between pointwise statements and global cohomological consequences is maintained, including for a power map whose inverse need not preserve closedness.
abstract_ja: 正値形式の積に対するHodge–Riemann関係を、部分的な正値性の下で調べる。通常のm正値性では半正値性を仮定せず混合Lefschetz構造を得る。因子ごとに正値錐を変える逐次的条件と、超平面上の正値性で定まる弱い条件については、低次数や追加条件付きの高次数で結果を示す。弱い正値錐から正の高次数形式への冪写像は点ごとの微分同相となるが、これをそのままコホモロジーの全射性と解釈することはできない。
abstract_source_url: https://arxiv.org/abs/2611.03124
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.03124v1](https://arxiv.org/abs/2611.03124)
- **著者:** Enhan Li
- **初回投稿日:** 2026-11-02
- **最終更新日:** 2026-11-02
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Hard Lefschetz定理とHodge–Riemann関係は、Kähler形式によってコホモロジーに強い構造が生じることを表す。では、すべての固有値が正でなくても、一定の次数まで正値性を保つ形式で同じ構造を得られるだろうか。本論文はこの問いを、通常・逐次的・弱いm正値性という三つの設定で扱う。

通常のm正値形式については、許される全双次数で混合Hodge–Riemann関係を証明する。先行する高次数の結果にあった半正値性の仮定を外し、負の固有値を許したままLefschetz同型と原始部分の正定値性を得る。

より一般に、各因子を選ぶたびに正値錐が変わる逐次的条件を導入する。この設定では低次数の完全な結果や、初期部分が半正値である場合の混合定理を示す。ただし、あらゆる逐次的正値列に対する高次数の理論は予想として区別されている。

弱いm正値性では、超平面への制限の正値性が出発点になる。Hodge指数型の符号数、特定の双次数のLefschetz構造、正の高次数形式の錐への冪写像の微分同相が得られる。最後の結果は点ごとの線形代数であり、閉形式を保つ逆写像や大域的な冪写像の全射性を与えるものではない。

## 背景と問題設定

$V$を複素次元$d$のベクトル空間、$\omega$を正の実$(1,1)$形式とする。通常の$m$正値性は

$$
\eta^j\wedge\omega^{d-j}>0\qquad(1\leq j\leq m)
$$

で定義される。$m<d$では$\eta$に負の固有値があってもよい。

実$(d-p-q,d-p-q)$形式$\Omega$に対し、Hodge–Riemann形式を

$$
Q\_\Omega(\alpha,\beta)=\mathrm i^{p-q}(-1)^{(p+q)(p+q-1)/2}\ast(\Omega\wedge\alpha\wedge\overline\beta)
$$

とする。$\ast$は$\omega^d/d!$を基準とした最高次数の係数を取り出す。原始部分は$P^{p,q}(\Omega,\lambda)=\ker(\Omega\wedge\lambda\wedge-)$である。本論文のLefschetz packageは、Lefschetz同型、この部分上の正定値性、直交Lefschetz分解を意味する。

## 主結果

### 通常のm正値形式の混合理論（Theorem A）

$1\leq p+q\leq m\leq d$とし、$\eta\_1,\ldots,\eta\_{m-p-q+1}$が同じ$\omega$に関して$m$正値とする。

$$
\Omega=\omega^{d-m}\wedge\eta\_1\wedge\cdots\wedge\eta\_{m-p-q},\qquad\lambda=\eta\_{m-p-q+1}
$$

とおけば、$\Omega$との積は

$$
\Lambda^{p,q}V^\ast\xrightarrow{\ \cong\ }\Lambda^{d-q,d-p}V^\ast
$$

となり、$Q\_\Omega$は原始部分上で正定値である。また

$$
\Lambda^{p,q}V^\ast=P^{p,q}(\Omega,\lambda)\oplus\lambda\wedge\Lambda^{p-1,q-1}V^\ast
$$

という直交分解を得る。形式が滑らかで閉じており、共通のKähler形式に関して点ごとに条件を満たせば、コンパクトKähler多様体のコホモロジーでも同じ結論が成り立つ。

### 逐次的正値性の低次数と制限（Theorem B）

$\Theta\_j=\eta\_1\wedge\cdots\wedge\eta\_j$、$\Theta\_0=1$とおく。good prefixとは

$$
\Theta\_{j-1}\wedge\eta\_j^a\wedge\omega^{d-j+1-a}>0\qquad(1\leq j\leq r,\ 1\leq a\leq d-j+1)
$$

を満たす列である。最初の形式は正定値だが、後の形式は不定符号でもよい。

この条件は部分空間への適切な長さの制限で保たれる。さらに$p+q\leq2$で、係数を作るprefixと原始方向$\lambda$までがgoodならば、完全なLefschetz packageが成り立つ。長さ3以下のgood prefixの積はstrictly strongly positiveである。全次数でのHodge–Riemann関係と、任意の長さでの強正値性は、それぞれConjectures 1.1、1.2に分けて提案される。

### 半正値なprefixの後の混合定理（Theorem C）

$0\leq k<d$とし、半正値形式のgood prefixの積を$\Theta$、$m=d-k$とする。$\Gamma\_\Theta(\omega)$をその積に対応する現在の双曲性錐とし、

$$
\eta\in\Gamma\_\Theta(\omega),\quad0\leq\ell\leq m-1,\quad N=m-\ell,\quad\Xi=\Theta\wedge\eta^\ell
$$

とおく。$p+q\leq N$で$\beta\_1,\ldots,\beta\_{N-p-q}\in\Gamma\_\Xi(\omega)$ならば

$$
\Omega=\Xi\wedge\beta\_1\wedge\cdots\wedge\beta\_{N-p-q}
$$

はLefschetz同型を与える。$p+q\geq1$で原始方向$\lambda$も同じ錐に入れば完全なpackageを得る。初期のprefixには半正値性を課すが、中間・最終の形式には負の固有値を許す。滑らかな閉形式の点ごとの仮定から大域的なコホモロジー版も従う。

### 弱いm正値性と冪写像（Theorem D）

$2\leq m\leq d$とする。弱い$m$正値錐$\widetilde\Gamma\_m(\omega)$は、すべての超平面への制限が$(m-1)$正値となる形式からなる。この錐上で

$$
\alpha\longmapsto\ast(\omega^{d-m}\wedge\eta^{m-2}\wedge\alpha^2)
$$

は実$(1,1)$形式の空間において符号数$(1,d^2-1)$をもつ。特に、その負号を付けた形式は$\ker(\omega^{d-m+1}\wedge\eta^{m-2}\wedge-)$上で正定値になる。

また

$$
\eta\longmapsto\omega^{d-m}\wedge\eta^{m-1}
$$

は弱い$m$正値錐からstrictly positiveな$(d-1,d-1)$形式の錐への実解析的微分同相である。

$\Omega=\omega^{d-m}\wedge\eta^{m-p-q}$、$1\leq p+q\leq m$とすれば、$(\Omega,\omega)$のLefschetz packageは$p\ne q$、$(p,q)=(1,1)$、または$p+q=m$の場合に成立する。高次数の一般の対角双次数はConjecture 1.3に残る。固有値が高々二つの例外を除き同じ正の値である場合には全許容双次数で成立する。

## 証明の見取り図

通常の理論では、まず同じ形式の冪を超平面への帰納法で扱う。その後、外積代数の固定した商を偏極する共通錐を見いだし、Cattaniの混合定理を適用する。逐次的条件では行列式の方向微分が定める双曲性錐を使うが、その双曲性だけで全高次数の結果が従うわけではない。

弱い錐の符号数には双曲多項式の根の凹性を使い、冪写像のproper性と被覆の議論から微分同相を得る。点ごとの原始分解をコホモロジーへ移す際にはDinh–NguyênのL2補正法が働く。Introduction後半では、逐次的正値性の数値的特徴づけと一般化Hessian方程式の可解性も予想として述べられ、証明済みの点ごとの理論から区別されている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.03124)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.03124v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems A–D; Conjectures 1.1–1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.03124v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction

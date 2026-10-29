---
layout: paper
title: Holomorphic Tischler fibration theorem for Stein spaces
title_ja: Stein空間上の正則Tischler近似とファイブレーション
authors: Bruno Scardua
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: We study a holomorphic analogue of Tischler approximation for closed differential forms normalized by a prescribed holomorphic vector field. The main setting consists of connected normal Stein spaces satisfying a degree-one reflexive Poincar\'e property, with finitely generated first integral homology and a holomorphic $\mathbb C^*$-action admitting a closed normalized reflexive one-form. Under these hypotheses, the given form can be approximated on compact subsets of the regular locus by closed normalized reflexive forms with discrete period groups. When the first Betti number is at least two, the approximating forms may be chosen with rank-two lattice periods. We relate these approximations to holomorphic locally trivial fibrations over quotients of $\mathbb C$, with connected Stein analytic fibers that may be singular. We also establish a finite-equivariant version for suitable Stein quotients and discuss the associated normalization obstructions, including those arising
  from local singularity topology. Further results concern closed holomorphic time forms, transverse foliations, and the relation between the period groups and the dynamics of complete holomorphic flows. Examples illustrate both the applicability and the limitations of the hypotheses.
topic: several-complex-variables
tags:
- stein-geometry
- complex-analytic-spaces
- foliations
- uniformization
arxiv_id: 2610.34383v1
arxiv_url: https://arxiv.org/abs/2610.34383
arxiv_submitted: '2026-10-25'
arxiv_updated: '2026-10-25'
summary: 固定した正則C乗法群作用で正規化された閉1形式を、周期群が離散的な形式で近似する。局所反射的Poincaré条件を満たす正規Stein空間まで拡張し、円筒や楕円曲線上の正則ファイブレーションと結びつける。
abstract_en: We study a holomorphic analogue of Tischler approximation for closed differential forms normalized by a prescribed holomorphic vector field. The main setting consists of connected normal Stein spaces satisfying a degree-one reflexive Poincar\'e property, with finitely generated first integral homology and a holomorphic $\mathbb C^*$-action admitting a closed normalized reflexive one-form. Under these hypotheses, the given form can be approximated on compact subsets of the regular locus by closed normalized reflexive forms with discrete period groups. When the first Betti number is at least two, the approximating forms may be chosen with rank-two lattice periods. We relate these approximations to holomorphic locally trivial fibrations over quotients of $\mathbb C$, with connected Stein analytic fibers that may be singular. We also establish a finite-equivariant version for suitable Stein quotients and discuss the associated normalization obstructions, including those arising
  from local singularity topology. Further results concern closed holomorphic time forms, transverse foliations, and the relation between the period groups and the dynamics of complete holomorphic flows. Examples illustrate both the applicability and the limitations of the hypotheses.
summary_en: ''
abstract_ja: 有限生成の第1ホモロジーと次数1の反射的Poincaré性を持つ連結正規Stein空間で、正則C乗法群作用に関して正規化された閉反射的1形式の近似を扱う。正則部分のコンパクト集合上で、離散周期群を持つ正規化形式によって近似でき、第1Betti数が2以上なら階数2の格子周期を選べる。対応する正則ファイブレーション、有限商に対する同変版、Stein曲面の一意化や流れに横断的な葉層の周期の性質も論じる。
abstract_source_url: https://arxiv.org/abs/2610.34383
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34383v1](https://arxiv.org/abs/2610.34383)
- **著者:** Bruno Scardua
- **初回投稿日:** 2026-10-25
- **最終更新日:** 2026-10-25
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

古典的Tischler理論は閉1形式、円周上のファイブレーション、横断的な流れを結びつける。本論文はその正則かつ非コンパクトな対応物をStein幾何で調べ、固定したベクトル場に対する正規化を保ったまま閉形式の周期を離散化する。

対象は滑らかなStein多様体だけではない。特異点を持つ正規Stein空間では反射的1形式を使い、閉形式が特異点の近くでも正則な原始関数を持つという局所条件を課す。この条件と第1ホモロジーの有限生成性の下で、離散周期を持つ形式による近似を示す。

周期群が離散的なら積分は$\mathbb C$の商への写像を定め、葉層を正則ファイブレーションとして記述できる。乗法群作用の周期性が重要であり、加法群作用では同じ近似が成立しない例があることもIntroductionは強調する。

## 背景と問題設定

完全正則ベクトル場$X$に対し、閉時間形式は$d\omega=0$、$\omega(X)=1$を満たす正則1形式である。乗法群作用$\Phi$の生成場を$X(p)=\left.\frac{d}{dt}\right|\_{t=0}\Phi(e^t,p)$とすると、流れは$2\pi i$周期を持つ。

正規空間$S$では$\Omega\_S^{[1]}=j\_\ast \Omega^1\_{S\_{\mathrm{reg}}}$を用いる。次数1の反射的Poincaré性とは、閉反射的1形式の層$Z\_S^1$に対し

$$
0\longrightarrow\mathbb C\_S\longrightarrow\mathcal O\_S\xrightarrow{d} Z\_S^1\longrightarrow0
$$

が完全であることをいう。正規Stein空間なら自動的に成り立つ条件ではない。

## 主結果

### 正規化された近似（Theorem A）

連結正規Stein空間$S$に正則$\mathbb C^\ast $作用があり、$H\_1(S,\mathbb Z)$が有限生成で、上のPoincaré性を満たすとする。閉反射的形式$\omega$が$\omega(X)=1$を満たせば、$S\_{\mathrm{reg}}$のコンパクト集合上で、同じ正規化を持つ離散周期群の形式により近似できる。$b\_1(S)\geq2$なら、周期群を$\mathbb C$内の階数2格子に選べる。

### ファイブレーションとしての近似（Theorem B）

同じ仮定の下で、離散群$\Lambda\_j\subset\mathbb C$と写像

$$
F\_j:S\longrightarrow\mathbb C/\Lambda\_j,\qquad F\_j^\ast (dt\_j)\longrightarrow\omega
$$

を得る。収束は正則部分のコンパクト集合上で一様である。底は$\mathbb C^\ast $または楕円曲線となり、$b\_1(S)\geq2$ならすべてを楕円曲線にできる。繊維はStein解析空間であり、特異であり得る。

### 有限商と滑らかな場合（Theorem C、Corollary D）

有限群$G$がStein多様体$M$に作用し、零点のない生成場を持つ乗法群作用と可換である場合、$G$不変な正規化閉形式を$G$不変な離散周期形式で近似できる。商$M/G$へ降下した反射的形式についても離散周期が得られる。

滑らかな場合、$b\_1(M)=0$なら正規化された閉時間形式は存在しない。$b\_1(M)=1$で存在すれば周期群は非零巡回群となり、$\mathbb C^\ast $上の連結繊維を持つ正則局所自明束を定める。$b\_1(M)\geq2$では楕円曲線上のそのような束で近似できる。正規化された形式のコホモロジー類は、軌道円周の類$[\gamma]$に対する$\langle\xi,[\gamma]\rangle=2\pi i$というアフィン条件を満たす。

### Stein曲面の一意化（Theorem E）

固定点のない正則$\mathbb C^\ast $作用を持つ連結Stein曲面には閉時間形式が存在し、その普遍被覆は$\mathbb C^2$または$\mathbb C\times\mathbb D$と双正則になる。さらに第1ホモロジーが有限生成なら、Betti数に応じて円筒または楕円曲線上の、連結Stein曲線を繊維とするファイブレーションを持つ。

### 葉の閉包と周期剛性（Theorem 1.3、Theorem F）

完全な横断正則流れで不変な余次元1葉層では、葉はすべて閉じる、閉包が真の実解析的Levi平坦超曲面になる、すべて稠密になる、という三つの場合が現れる。これは周期群の閉包が離散、真で非離散、$\mathbb C$全体、となることに対応する。

Theorem Fはさらに、$TM=E^s\oplus\mathbb CX\oplus E^u$という不変正則分解、正の階数の安定・不安定束、$E^s\oplus E^u$の可積分性、実時間に沿う一様指数収縮を仮定する。収縮の仮定は、あるHermitian計量$h$と定数$C,\lambda>0$に対し、すべての実$t\geq0$で

$$
\Vert D\Phi\_t(v\_s)\Vert \_h\leq Ce^{-\lambda t}\Vert v\_s\Vert \_h,\qquad \Vert D\Phi\_{-t}(v\_u)\Vert \_h\leq Ce^{-\lambda t}\Vert v\_u\Vert \_h
$$

が成り立つことである。正の実周期$T$を持つ点$p$があり、その共同葉上の戻り写像の大域安定・不安定多様体が任意の基点対についてただ一点で交わるなら、

$$
\operatorname{Per}(\omega)=\lbrace t\in\mathbb C:\Phi\_t(p)=p\rbrace
$$

は非零離散群で、葉層はこの群による$\mathbb C$の商上の正則束を定める。Steinの場合は巡回群となる。単に双曲性だけを仮定した結論ではなく、共同可積分性と大域積構造の条件を伴う。

## 証明の見取り図

Introductionの説明では、閉時間形式と流れに横断的な葉層の対応を基礎に、周期の離散化をファイブレーションへ結びつける。特異空間へ移る際には反射的微分形式と局所原始関数の条件が必要になる。加法群作用の反例や局所特異点による障害も取り上げられており、正規化と周期性の仮定を除いた一般化は主張されていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34383)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34383v1) — Section 1, pp. 2–6
- **Introduction中で言及された主要結果:** Theorems A–C、Corollary D、Theorem E、Theorem 1.3、Theorem F
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34383v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction

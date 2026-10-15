---
layout: paper
title: Smoothness criterion for Fano orbifolds and bases of Lagrangian fibrations
title_ja: Fanoオービフォールドの滑らかさとLagrangianファイブレーションの底空間
authors: Zhiyu Liu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We establish a smoothness criterion for Fano varieties with quotient singularities. As an application, we show that if $X\to B$ is a Lagrangian fibration from a compact hyper-K\"ahler manifold and $B$ has quotient singularities, then $B$ is a projective space.
topic: algebraic-geometry
tags:
- fano-varieties
- singularities
- chern-classes
- hyperkahler-geometry
- uniformization
arxiv_id: 2610.20496v1
arxiv_url: https://arxiv.org/abs/2610.20496
arxiv_submitted: '2026-10-14'
arxiv_updated: '2026-10-14'
summary: 商特異点をもつFano多様体について、アーベル多様体からの全射と慣性スタック上の最高Chern類の消滅から、射影空間の積であることを示す。応用として、コンパクトhyper-Kähler多様体のLagrangianファイブレーションの底空間が商特異点をもつなら、それは射影空間となる。
abstract_en: ''
summary_en: The paper uses intersection theory on canonical stacks to detect smoothness of singular Fano varieties. Its criterion combines an abelian cover with vanishing top Chern classes on nonidentity inertia components. Applying the criterion to a Lagrangian fibration identifies its base with projective space when quotient singularities are assumed. The quotient-singularity hypothesis is part of the result and is not removed here.
abstract_ja: Fano多様体の商特異点を、標準Deligne–Mumfordスタックの慣性成分の交叉理論によって排除する判定法を与える。アーベル多様体から全射を受け、非恒等慣性成分の接束の最高Chern類が消えるなら、Fano多様体は滑らかになり射影空間の積となる。Lagrangianファイブレーションの底空間では、変形と大域的なhyper-Kähler幾何からこの二条件を確かめ、商特異点をもつ底空間が射影空間であることを導く。
abstract_source_url: https://arxiv.org/abs/2610.20496
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.20496v1](https://arxiv.org/abs/2610.20496)
- **著者:** Zhiyu Liu
- **初回投稿日:** 2026-10-14
- **最終更新日:** 2026-10-14
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトhyper-Kähler多様体のLagrangianファイブレーションでは、底空間をどこまで具体的に決定できるかが重要な問題となる。底空間が滑らかな場合には射影空間であることが知られる一方、特異点がある場合には、その特異点を排除する仕組みが必要である。

本論文はまず、Lagrangianファイブレーションに限定しないFano多様体の判定法を与える。商特異点を標準スタックの安定化群として記録し、その非自明な部分に対応する最高Chern類の消滅を使うことで、滑らかさを導く。

この判定法をファイブレーションの底空間に適用すると、商特異点をもつ底空間は射影空間となる。商特異点という仮定は結論の前提であり、任意の特異点をもつ底空間について同じ結論を本論文が証明した、とは述べない。

## 背景と問題設定

商特異点をもつ正規射影多様体$X$には、粗モジュライ空間が$X$となる標準的な滑らかなDeligne–Mumfordスタック$\mathcal X$が付随する。その慣性スタックは

$$
I\mathcal X=\mathcal X\times_{\mathcal X\times\mathcal X}\mathcal X
$$

であり、恒等自己同型に対応する開かつ閉な成分を$I\mathcal X^e$と書く。非恒等成分は、商特異点を生む非自明な安定化群の情報を保持する。

## 主結果

### 主定理1（Theorem 1.1）

商特異点をもつFano多様体$X$が次の二条件を満たすなら、$X$は射影空間の積となる。第一に、アーベル多様体$A$からの全射$A\to X$が存在する。第二に、任意の非恒等連結成分$I\subset I\mathcal X$について

$$
c_{\dim I}(T_I)=0\quad\text{in }\operatorname{CH}^*(I)_{\mathbb Q}
$$

が成り立つ。この条件は$X$自身の最高Chern類の消滅ではなく、非恒等慣性成分の接束に関する条件である。

結論の核心は$X$が滑らかになる点にある。その後、アーベル多様体から全射を受ける滑らかな多様体についての既存結果とFano多様体の単連結性から、射影空間の積という構造を得る。

### 主定理2（Theorem 1.2）

$2n$次元コンパクトhyper-Kähler多様体からのLagrangianファイブレーション$X\to B$で、$B$が商特異点をもつなら

$$
B\cong\mathbb P^n
$$

である。滑らかな底空間の場合のHwangの定理を、商特異点を許した状況へ広げる。Introductionでは、全空間が4次元なら商特異点の仮定なしに既知であることも述べられているが、本論文の一般次元の主張とは仮定を区別する必要がある。

## 証明の見取り図

Fano判定ではアーベル被覆を有限として扱い、$A\times_{\mathcal X}A$の二つの射影の差$D$を考える。$D^{-1}(0)$の非恒等部分が残ると仮定し、過剰交叉公式によって交叉を慣性成分の最高Chern類で表す。Chern類の消滅とStein分解後の交叉重複度の正値性により、関連する成分の像は$A$全体にはならない。

一方、その像がアーベル部分多様体であることと直交補の作用から、同じ非恒等部分に接しながら像の次元がより大きい成分を作れる。有限個の成分に対してこの増大が続くことはできず、非恒等部分が存在しないと結論する。

ファイブレーションへの応用では、同じ底空間$B$を保った変形によって第二のLagrangianファイブレーションを作る。その一般ファイバーから$B$へのアーベル被覆を得て、さらにChern類の消滅条件を確認し、判定定理を適用する。

## 原論文との対応

- **Abstractページ:** [Smoothness criterion for Fano orbifolds and bases of Lagrangian fibrations](https://arxiv.org/abs/2610.20496)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.20496v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.20496v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction

---
layout: paper
title: >-
  The linear Shafarevich conjecture for quasiprojective varieties and algebraicity of Shafarevich morphisms
title_ja: >-
  準射影多様体の線形Shafarevich予想とShafarevich射の代数性
authors: >-
  Benjamin Bakker, Yohan Brunebarbe, Jacob Tsimerman
arxiv_primary_category: "math.AG"
arxiv_categories:
  - "math.AG"
  - "math.CV"
  - "math.DG"
arxiv_abstract: >-
  We prove that the universal cover of a normal complex algebraic variety admitting a faithful complex representation of its fundamental group is an analytic Zariski open subset of a holomorphically convex complex space. This is a non-proper version of the Shafarevich conjecture. More generally we define a class of subset of the Betti stack for which the covering space trivializing the corresponding local systems has this property. Secondly, we show that for any complex local system $V$ on a normal complex algebraic variety $X$ there is an algebraic map $f \colon X\to Y$ contracting precisely the subvarieties on which $V$ is isotrivial.
topic: algebraic-geometry
tags:
  - fundamental-groups
  - hodge-theory
  - higgs-nonabelian-hodge
  - stein-geometry
arxiv_id: "2408.16441v1"
arxiv_url: "https://arxiv.org/abs/2408.16441"
arxiv_submitted: "2024-08-29"
arxiv_updated: "2024-08-29"
summary: >-
  準射影な正規複素代数多様体の基本群がほぼ忠実な有限次元複素表現をもつとき、普遍被覆が正則凸空間の解析的Zariski開集合になることを示す。さらに有界rankの局所系の集合に対し、それらが有限monodromyとなる部分多様体をちょうど収縮する代数的Shafarevich射の存在と一意性を確立する。
abstract_en: >-
  We prove that the universal cover of a normal complex algebraic variety admitting a faithful complex representation of its fundamental group is an analytic Zariski open subset of a holomorphically convex complex space. This is a non-proper version of the Shafarevich conjecture. More generally we define a class of subset of the Betti stack for which the covering space trivializing the corresponding local systems has this property. Secondly, we show that for any complex local system $V$ on a normal complex algebraic variety $X$ there is an algebraic map $f \colon X\to Y$ contracting precisely the subvarieties on which $V$ is isotrivial.
summary_en: ""
abstract_ja: >-
  準射影多様体に対する線形Shafarevich予想を証明する。基本群にほぼ忠実な複素線形表現がある正規複素代数空間では、適切な部分コンパクト化の普遍被覆が正則凸となり、元の普遍被覆はその稠密な解析的Zariski開部分となる。より一般に、Betti stack内の局所系の集合に対応する被覆の正則凸性を扱い、任意の有界rank局所系族に対する代数的Shafarevich射を構成する。
abstract_source_url: "https://arxiv.org/abs/2408.16441"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- arXiv: [2408.16441v1](https://arxiv.org/abs/2408.16441)
- 著者: Benjamin Bakker, Yohan Brunebarbe, Jacob Tsimerman
- 対象: Abstract と Introduction

## 要約

Shafarevich予想は、滑らかな射影多様体の普遍被覆が正則凸かを問う。準射影の場合には境界でのmonodromyがHodge理論と調和写像の挙動を難しくし、射影の場合の非可換Hodge理論をそのまま適用できない。

論文は局所系をBetti stackの部分集合 $\Sigma$ としてまとめ、それらを自明化する最小被覆 $\widetilde X_\Sigma$ を考える。正則凸性と、$\Sigma$ がisotrivialになる部分多様体をちょうど収縮するShafarevich射の代数性を同時に扱う。

## 主結果

### 線形Shafarevich予想（Theorem 1.1）

連結正規代数空間 $X$ の基本群が有限kernelをもつ有限次元複素表現をもつなら、基本群を有限kernel・cokernelの範囲で保つ部分コンパクト化 $X\subset\overline X$ が存在し、$\overline X$ の普遍被覆は正則凸である。したがって $X$ の普遍被覆は正則凸複素空間の稠密な解析的Zariski開部分となる。

### 代数的Shafarevich射（Theorem 1.3）

有界rankの局所系の集合 $\Sigma$ に対し、一意な代数的射
$$
\operatorname{sh}_\Sigma(X):X\longrightarrow\operatorname{Sh}_\Sigma(X)
$$
が存在する。これは $\Sigma$ がnonextendableであるとき、かつそのときに限りproperであり、$\Sigma$ がsemisimpleならtargetのcoarse spaceは準射影的である。

## 証明の見取り図

semisimpleかつ境界monodromyがquasi-unipotentな場合には、archimedeanおよびnon-archimedeanなpluriharmonic mapを組み合わせてpsh exhaustionを作る。定義可能解析空間におけるStein factorizationとdefinable GAGAが解析的射を代数化する。

一般の場合にはBetti stack上のabsolute Hodge closure、miniversal局所系のmixed Hodge・twistor構造、quasi-unipotent局所系の稠密性を用いる。Katzarkov–Zuo foliationの代数的可積分性がexhaustionのstrictnessを担う。

## 原論文との対応

普遍被覆についてはTheorem 1.1、一般の正則凸性はTheorem 1.2、Shafarevich射はTheorem 1.3、定義可能Stein factorizationはTheorem 1.7に対応する。

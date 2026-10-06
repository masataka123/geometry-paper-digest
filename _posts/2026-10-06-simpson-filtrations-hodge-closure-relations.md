---
layout: paper
title: Simpson filtrations and closure relations of Hodge moduli spaces
title_ja: SimpsonフィルトレーションとHodgeモジュライ空間の閉包関係
authors: Zhi Hu, Pengfei Huang, Fei Yu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  In this paper, we study closure relations of Simpson strata in Hodge moduli spaces over a smooth complex projective curve of genus $g\geq2$ and prove in every rank that the Heinloth weight strictly increases whenever a specialization changes the fixed component. For stable full chains, we refine this numerical condition by comparing the degrees of the corresponding filtration steps and construct counterexamples to Simpson's nestedness conjecture for the Dolbeault and de Rham moduli spaces in every rank $n\geq4$. Using the maximum property of this weight, we also discuss Simpson filtrations from the viewpoint of $\Theta$ stratifications.
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- moduli
- stability
- vector-bundles-sheaves
arxiv_id: 2610.06438v1
arxiv_url: https://arxiv.org/abs/2610.06438
arxiv_submitted: '2026-10-05'
arxiv_updated: '2026-10-05'
summary: |-
  種数2以上の滑らかな複素射影曲線のHodgeモジュライ空間で、特殊化が固定成分を変えるとHeinloth重みが厳密に増加することを全階数で示す。安定なfull chainの次数比較を使い、階数4以上ではSimpson strataの閉包がstrata全体の合併になるというnestedness予想への反例を構成する。
abstract_en: |-
  In this paper, we study closure relations of Simpson strata in Hodge moduli spaces over a smooth complex projective curve of genus $g\geq2$ and prove in every rank that the Heinloth weight strictly increases whenever a specialization changes the fixed component. For stable full chains, we refine this numerical condition by comparing the degrees of the corresponding filtration steps and construct counterexamples to Simpson's nestedness conjecture for the Dolbeault and de Rham moduli spaces in every rank $n\geq4$. Using the maximum property of this weight, we also discuss Simpson filtrations from the viewpoint of $\Theta$ stratifications.
summary_en: ''
abstract_ja: |-
  種数 $g\geq2$ の滑らかな複素射影曲線上のHodgeモジュライ空間で、Simpson strataの閉包関係を調べる。固定成分を変える特殊化ではHeinloth重みが厳密に増加することを全階数で示す。安定なfull chainではフィルトレーションの各段階の次数によってこの条件を精密化し、全ての階数 $n\geq4$ でDolbeaultおよびde Rhamモジュライ空間のnestedness予想に反例を与える。また、重みの最大性を使ってSimpsonフィルトレーションと $\Theta$ 層別の関係を議論する。
abstract_source_url: https://arxiv.org/abs/2610.06438
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.06438v1](https://arxiv.org/abs/2610.06438)
- **著者:** Zhi Hu, Pengfei Huang, Fei Yu
- **初回投稿日:** 2026-10-05
- **最終更新日:** 2026-10-05
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

非可換Hodge理論では、平坦束とHiggs束のモジュライ空間をHodge族の中で統一して扱える。スケーリング作用による極限の型を使うと、各モジュライ空間がSimpson strataに分かれる。本論文は、あるstratumの閉包が別のstratumとどのように交わるかを調べる。

著者らはまず、極限の固定成分に付くHeinloth重みが閉包関係を制約することを示す。特殊化で成分が変わる場合、重みは単に非減少なのではなく厳密に増える。この結果は、極限のHiggs束が狭義半安定である場合も含め、全階数で成立する。

しかし、数値的に可能な型が分かっても、そのstratum全体が閉包に含まれるとは限らない。論文は階数4以上で、閉包が別のstratumの一部とだけ交わる例を構成する。従って数値的な閉包制約の成立と、閉包がstrataの合併になるというnestednessは別の性質である。

## 背景と問題設定

$X$ を種数 $g\geq2$ の滑らかな複素射影曲線とし、$M_{\mathrm{Hod}}(X,n)$ を階数 $n$、次数0の半安定な $\lambda$-flat束のモジュライ空間とする。$\lambda=0$ と1のファイバーは、それぞれDolbeault空間とde Rham空間である。

スケーリング固定点集合の連結成分を $P_\alpha$、対応するstratumを $S_\alpha^\star$ と書く。ここで $\star\in\lbrace\mathrm{Hod},\mathrm{Dol},\mathrm{dR}\rbrace$ である。Simpsonフィルトレーションは、付随する次数付きHiggs束が半安定となるGriffiths横断的フィルトレーションをいう。

Hodge束の系 $E=\bigoplus_p E^p$ の矢が次数を一つ下げるという規約で、重みは

<div>
$$
\delta(E)=\sum_p p\,\deg E^p
$$
</div>

となる。nestedness予想は、$\overline{S_\alpha^\star}$ が $S_\beta^\star$ と交われば後者を丸ごと含む、という閉包条件である。

## 主結果

### 主定理1：異なる固定成分への特殊化での厳密な重み増加（Theorem 1.1）

Heinloth重みは各 $P_\alpha$ 上で一定で、その値を $\delta_\alpha$ とする。全ての階数 $n\geq1$ で

<div>
$$
\overline{S_\alpha^\star}
\subseteq S_\alpha^\star\cup
\bigcup_{\delta_\beta>\delta_\alpha}S_\beta^\star,
\qquad
\star\in\lbrace\mathrm{Hod},\mathrm{Dol},\mathrm{dR}\rbrace
$$
</div>

が成立する。同じ重みの異なる固定成分へ特殊化することはできない。ただし重みが増えるという必要条件だけでは、実際に交わるか、交わったときにstratum全体を含むかは決まらない。

### Full chainでの次数比較（Proposition 1.2）

安定なfull chainは、直線束 $L_1,\ldots,L_n$ と非零な矢 $L_i\to L_{i+1}\otimes K_X$ からなる。prefix degreeを

<div>
$$
s_k=\deg(L_1\oplus\cdots\oplus L_k),
\qquad 1\leq k\lt n
$$
</div>

とする。$n\geq2$ では安定full chain strataの合併は半安定モジュライ空間内で閉じ、安定点だけからなる。対応するラベル $\mathbf s,\mathbf t$ について、

<div>
$$
\overline{S_{\mathbf s}^\star}
\subseteq\bigcup_{\mathbf t\geq\mathbf s}S_{\mathbf t}^\star,
\qquad
\dim S_{\mathbf s}^\star-\dim S_{\mathbf t}^\star
=(t_1-s_1)+(t_{n-1}-s_{n-1})
$$
</div>

が成立する。比較 $\mathbf t\geq\mathbf s$ は成分ごとの比較である。内部の次数だけを変えると、重みが増えてもstrataの次元が変わらない場合があることが、反例構成の鍵となる。

### 主定理2：階数4以上のnestednessへの反例（Theorem 1.3）

全ての $g\geq2$ と $n\geq4$ に対して、安定なfull chainだけからなる異なる固定連結成分 $P_{\mathbf s}$、$P_{\mathbf t}$ が存在し、

<div>
$$
\varnothing\neq
\overline{S_{\mathbf s}^\star}\cap S_{\mathbf t}^\star
\subsetneq S_{\mathbf t}^\star,
\qquad
\star\in\lbrace\mathrm{Hod},\mathrm{Dol},\mathrm{dR}\rbrace
$$
</div>

となる。閉包は相手のstratumと交わるが、その全体は含まない。従ってDolbeaultとde Rhamのnestedness予想は全ての階数4以上で成立せず、同じ閉包条件はHodge空間でも失敗する。この定理は階数3に同じ反例があるとは述べていない。

## 証明の見取り図

重みをGriffiths横断的フィルトレーションの重み付き次数の最大値として特徴付け、その最大値を実現するものがSimpsonフィルトレーションであることを使う。一般点のフィルトレーションをproperなflag Quot空間で特殊化し、各段階を飽和化して重みを比較する。同じ重みなら飽和化の長さと追加の不安定化修正の寄与が消え、固定成分も変わらない。

Full chainでは、飽和化の長さがprefix degreeの増分になる。階数4で矢の因子の次数ベクトル $(0,2,0)$ と $(1,0,1)$ を使い、両端のprefix degreeを固定したまま内部だけを変える。Dolbeault側ではHecke構成、de Rham側では横断的flagの非飽和な段階の平滑化によって実際の特殊化を作り、同次元の異なるstrata間の部分的な閉包交差を得る。

Introductionでの $\Theta$ 層別との関係は非形式的な議論として位置付けられ、より完全な扱いは今後の更新に委ねられている。通常のShatz層別との同一視も行っていない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.06438](https://arxiv.org/abs/2610.06438)
- **Introduction:** Section 1、pp. 1–3。
- **主要定理・式:** Theorem 1.1、Proposition 1.2、Theorem 1.3、式(1.1)–(1.4)。
- **論文構成:** p. 3。Section 2で重みの最大性と閉包制約、Section 3でfull chainと反例を扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** CC BY 4.0。英語Abstract原文と日本語による紹介の出典は上記論文である。
- **source_scope:** Abstract and Introduction。

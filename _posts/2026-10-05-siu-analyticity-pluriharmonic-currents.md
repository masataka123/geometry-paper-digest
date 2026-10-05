---
layout: paper
title: Siu's analyticity theorem for positive pluriharmonic currents
title_ja: 正の多重調和カレントに対するSiuの解析性定理
authors: Tien-Cuong Dinh, Duc-Bao Nguyen, Viet-Anh Nguyen
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: |-
  Let $T$ be a positive $dd^c$-closed current of bidimension $(q,q)$ on a compact Kähler manifold $X$. For every $c>0$, let $E_c(T)$ be the set of points of $X$ where the Lelong number of $T$ is larger or equal to $c$. We show that $E_c(T)$ is an analytic subset of dimension at most $q$ of $X$. Moreover, the following Siu decomposition holds $$T=\sum_{i\in I} λ_i[V_i] +T_0,$$ where $\{V_i\}_{i\in I}$ is a (possibly empty) finite or countable family of compact analytic subsets of dimension $q$ in $X$, $λ_i\in\mathbb{R}^+$, and $T_0$ is a positive $dd^c$-closed current such that $E_c(T_0)$ is an analytic subset of dimension at most $q-1$ of $X$ for every $c>0$. The proof relies on the duality between the pseudoeffective cone and the movable cone of a compact Kähler manifold, recently obtained by Tosatti (2026), together with a theorem of Vigny (2009) and the theory of density currents for positive $dd^c$-closed currents developed by Sibony, the first and third authors.
topic: several-complex-variables
tags:
- pluripotential-theory
- positivity
- complex-analytic-spaces
- foliations
arxiv_id: 2606.29680v2
arxiv_url: https://arxiv.org/abs/2606.29680
arxiv_submitted: '2026-06-29'
arxiv_updated: '2026-10-01'
summary: |-
  コンパクトKähler多様体上の正の $dd^c$-閉カレントに対して、Lelong数の上位集合の解析性とSiu分解を証明する。通常の閉カレントより広い対象で成立する定理であり、擬有効錐とmovable錐の双対性が重要な役割を果たす。支持集合の大きさが制限されたカレントの解析的分解や、残余成分の正値性も導く。
abstract_en: ''
summary_en: |-
  Classical Siu theory associates analytic sets to the concentration of positive closed currents. This paper extends that mechanism to positive pluriharmonic currents when the ambient manifold is compact Kähler. It also controls the remainder after analytic components are removed. The extension has consequences for currents supported on small sets and for the positivity of their cohomology classes.
abstract_ja: |-
  コンパクトKähler多様体上の正の $dd^c$-閉カレントについて、正の閾値以上のLelong数を持つ点の集合が解析的であることを示す。カレントは同じ次元の解析集合に沿う積分カレントの和と、より低次元のLelong上位集合しか持たない残余成分に分解できる。証明にはmovable錐との双対性、Lelong数を保つ変換、接カレントの理論を用いる。
abstract_source_url: https://arxiv.org/abs/2606.29680
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.29680v2](https://arxiv.org/abs/2606.29680)
- **著者:** Tien-Cuong Dinh, Duc-Bao Nguyen, Viet-Anh Nguyen
- **初回投稿日:** 2026-06-29
- **最終更新日:** 2026-10-01
- **主分類・副分類:** math.CV（主分類）、math.AG（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正の閉カレントの特異性はLelong数で測ることができ、Siuの定理はその正の上位集合が解析集合になることを保証する。葉層論などに自然に現れる正の $dd^c$-閉カレントでは、通常の閉性より条件が弱く、同じ結論が自動的に成り立つわけではない。

本論文は、周囲の多様体をコンパクトKählerとすると、Lelong上位集合の解析性とSiu型分解がこの広いクラスでも成立することを示す。一般の非コンパクト複素多様体では反例があるため、コンパクト性は実質的な仮定である。

解析的な成分を除いた残余カレントのLelong数まで制御することで、支持集合にHausdorff測度の制約を課した場合の純粋に解析的な分解を得る。また、解析集合に質量を与えないカレントのコホモロジー類がmovableであることなど、正値性に関する結論も得る。

## 背景と問題設定

$T$ の双次元が $(q,q)$ であるとは、複素 $q$ 次元の解析集合に沿う積分カレントと同じ型であることを指す。双次数 $(1,1)$ と双次元 $(1,1)$ は一般の次元では異なるので区別する。Lelong数を $\nu(T,x)$ と書き、

<div>
$$
E_c(T)=\{x\in X\mid\nu(T,x)\ge c\},\qquad c>0
$$
</div>

と置く。従来のSiu定理は $dT=0$ を仮定する。本論文の主要な問題は、コンパクトKähler多様体上で $dd^cT=0$ だけを仮定してどこまで同じ構造が得られるかである。

## 主結果

### 主定理1：解析性とSiu分解（Theorem 1.2）

コンパクトKähler多様体 $X$ 上の正の $dd^c$-閉カレント $T$ が双次元 $(q,q)$ なら、各 $c>0$ について $E_c(T)$ は次元高々 $q$ の解析集合となる。さらに

<div>
$$
T=\sum_{i\in I}\lambda_i[V_i]+T_0
$$
</div>

と分解する。ここで $I$ は空でもよい有限または可算集合、$V_i$ は $q$ 次元のコンパクト解析集合、$\lambda_i>0$ であり、$T_0$ は正の $dd^c$-閉カレントである。残余成分には

<div>
$$
\dim E_c(T_0)\le q-1\qquad(c>0)
$$
</div>

という一段強い制約がある。曲面でのChiose–Tomaの先行分解との比較もIntroductionにあり、本論文はKählerの場合に残余成分のLelong数による特徴付けを加える。

### 支持の測度条件による解析的分解（Corollary 1.4）

$A_k\subset X$ が有限な $2q$ 次元Hausdorff測度を持つBorel集合で、$T$ が $\bigcup_{k\in\mathbb N}A_k$ の外に質量を与えないなら、残余成分なしに

<div>
$$
T=\sum_{i\in I}\lambda_i[V_i]
$$
</div>

と書ける。Introductionはこれを葉層論への応用として説明する。特に、Zariski稠密な葉が正の $dd^c$-閉カレントを支持する可能性に制約を与える。

### 主定理2：カレントの類の正値性（Theorem 1.5）

今度は $T$ を双次元 $(1,1)$ の正の $dd^c$-閉カレントとし、いかなる真の解析集合にも質量を与えないと仮定する。このときコホモロジー類 $\lbrace T\rbrace$ はmovableである。さらに $\dim X=2$ ならnefであり、$T$ が閉でない場合にはbigでもある。閉である場合にbigでないという逆向きの主張ではない。

## 証明の見取り図

VignyのLelong–Skoda型変換により、Lelong数を保って双次数 $(1,1)$ の場合へ帰着する。次に擬有効錐とmovable錐の双対性および有限個の点でのblow-upを使い、$T$ と同じコホモロジー類にあり、Lelong数が $T$ のものを各点で上回る正の閉カレント $S$ を構成する。

$S$ に古典的なSiu定理を適用すると、$E_c(T)$ を解析集合の中に閉じ込められる。その後、滑らかな因子に沿う接カレントを用いた次元に関する帰納法で解析性そのものを証明する。Introductionはこの接カレントの理論がTheorem 1.5にも用いられることを説明する。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2606.29680)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2606.29680v2)、Section 1, pp. 1–4。
- **Introduction中で言及された主要結果:** Theorems 1.2・1.5、Corollary 1.4。Theorem 1.3は先行研究の引用。
- **論文構成の説明:** Outline of the paper, p. 3。
- **確認したarXivバージョン:** 2606.29680v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。

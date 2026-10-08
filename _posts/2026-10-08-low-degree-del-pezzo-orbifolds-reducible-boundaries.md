---
layout: paper
title: Classification of low degree del Pezzo orbifolds II
title_ja: 可約境界を持つ低次数del Pezzo orbifoldの分類
authors: Saptarshi Dandapat
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  Del Pezzo orbifolds are del Pezzo surfaces equipped with a strict normal crossing divisor, called boundary, such that the log anticanonical divisor is ample. We classify del Pezzo orbifolds of degree less than 6 in terms of components of the boundary, in the sense of Campana. This completes our previous work on classification of del Pezzo orbifolds with irreducible boundaries.
topic: algebraic-geometry
tags:
- fano-varieties
- positivity
- birational-geometry
arxiv_id: 2610.06357v1
arxiv_url: https://arxiv.org/abs/2610.06357v1
arxiv_submitted: '2026-10-05'
arxiv_updated: '2026-10-05'
summary: |-
  次数5以下の滑らかなdel Pezzo曲面上で、有限のCampana多重度を持つ可約SNC境界がlog Fano条件を満たす場合を分類する。境界成分の交わりと多重度を組み合わせた判定を与え、既存の既約境界の分類を補完する。境界を固定しても、多重度を小さくすれば常にlog Fanoになるわけではない。
abstract_en: ''
summary_en: |-
  Adding an orbifold boundary to a del Pezzo surface makes ampleness depend on both curve configurations and integral multiplicities. This paper organizes the reducible-boundary cases in degrees one through five. Intersection tests against exceptional curves turn the geometric question into explicit restrictions on those multiplicities. The classification provides input for questions about Campana curves and points, rather than a general solution to those questions.
abstract_ja: |-
  del Pezzo曲面に重み付きの単純正規交差境界を加えたとき、負のlog標準因子が豊富になる条件を調べる。扱う次数は基礎曲面の反標準次数であり、1から5までである。本論文は可約境界の成分、その配置、許容される有限多重度を分類し、著者の既約境界に関する先行研究と合わせてこの範囲のdel Pezzo orbifoldの分類を完成させる。
abstract_source_url: https://arxiv.org/abs/2610.06357v1
license_name: CC BY-NC-ND 4.0
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.06357v1](https://arxiv.org/abs/2610.06357v1)
- **著者:** Saptarshi Dandapat
- **初回投稿日:** 2026-10-05
- **最終更新日:** 2026-10-05
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [CC BY-NC-ND 4.0](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

Fano曲面に境界を加えると、もとの反標準因子が豊富でもlog反標準因子が豊富とは限らない。Campana orbifoldでは境界成分に整数の多重度を与えるため、境界の配置だけでなく整数同士の組合せも正値性を左右する。本論文は、その条件を低次数のdel Pezzo曲面について分類する。

対象は次数1から5までの滑らかなdel Pezzo曲面と、有限多重度を持つ可約の単純正規交差境界である。各次数で、境界になり得る曲線、成分の組合せ、log反標準因子を豊富にする多重度を記述する。既約境界を扱った著者の先行研究を補完する位置づけである。

分類の意義は、log Fanoという抽象的条件を具体的な曲線と多重度のデータに翻訳する点にある。Campana有理曲線、近似問題、Campana点の計数への応用が動機として説明されるが、それらの一般予想の解決をこの論文の結論と取り違えてはならない。

## 背景と問題設定

<p>
Introductionでは簡単のため代数閉体の標数を0とする。$X$ は滑らかなdel Pezzo曲面で、$d=K_X^2$ が次数である。境界の重みは次の形を取り、多重度は全て有限である。
</p>

<div>
$$
\Delta=\sum_iD_i\ \text{はSNC},\qquad
\Delta_\epsilon=\sum_i\left(1-\frac1{m_i}\right)D_i,\qquad m_i\ge2.
$$
</div>

<p>
del Pezzo orbifoldの条件は $-(K_X+\Delta_\epsilon)$ の豊富性である。重みが1未満なので対はkltである。次数7以下では曲線錐が $(-1)$ 曲線で生成されるため、豊富性をそれらとの正の交点数で判定できる。可約境界では、一つの $(-1)$ 曲線が複数の成分に会うことが多重度間の条件を生む。
</p>

## 主結果

### 分類の範囲（Section 1.3）

<p>
Introductionでは概略として次のように述べられている。次数 $d\in\lbrace1,2,3,4,5\rbrace$ ごとに、可約境界の可能な成分、Picard群内の類と相互交点数で表される配置、および豊富性を満たす全ての多重度を決定する。本文の対応箇所としてTheorems 2.1、3.7、4.8、5.3、6.6が挙げられる。
</p>

Introduction自体には各次数の分類表は掲載されていないため、ここでその内容を推測して列挙しない。以下の次数上界と三次曲面の例は、Introductionに明示された分類の仕組みを具体化するものである。

### 境界の反標準次数の上界（Remark 1.4）

log反標準因子の豊富性から、被約境界の複雑さには一様な上界が付く。

<div>
$$
\sum_i\left(1-\frac1{m_i}\right)(-K_X\cdot D_i)\lt d,
\qquad -K_X\cdot\Delta\le2d-1,
\qquad r\le2d-1.
$$
</div>

<p>
ここで $r$ は境界成分数である。各重みが少なくとも $1/2$ なので、成分数だけでなくその反標準次数も制限される。従って固定した $d$ では基礎となる対 $(X,\Delta)$ は有界族をなす一方、多重度そのものは有界とは限らない。
</p>

### 三次曲面上の三角形（Example 1.3）

滑らかな三次曲面上の同一平面内の三直線を境界とする。三直線が一点に集まらないこと、すなわちEckardt点を作らないことがSNC条件である。このときlog Fano条件は、逆数多重度の狭義三角不等式に一致する。

<div>
$$
\frac1{m_j}+\frac1{m_k}>\frac1{m_i}
\qquad (\lbrace i,j,k\rbrace=\lbrace1,2,3\rbrace).
$$
</div>

<p>
例えば $(2,2,m)$ は全ての $m\ge2$ で許され、$(2,3,m)$ は $2\le m\le5$ で許される。また $(3,4,11)$ は許されるが $(2,4,11)$ は許されない。従って、一つの多重度を下げる操作に対する豊富性の単調性を仮定することはできない。
</p>

## 証明の見取り図

<p>
Introductionが示す方針は、まず境界の反標準次数の上界から成分候補を低次数の曲線へ絞ることである。次に既存の低次数曲線の分類を使って配置を整理し、全ての $(-1)$ 曲線との交点数が正になる条件を多重度の不等式へ直す。SNC条件には曲面のモジュライ上の位置も関係するため、数値条件だけで配置の存在を代用しない。
</p>

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2610.06357v1
- **Introduction:** Section 1、pp. 1–6冒頭。主結果の概略はSection 1.3、p. 3。
- **具体的記述:** Definitions 1.1–1.2、Example 1.3、Remark 1.4。後続の分類表や証明は確認範囲に含めない。
- **論文構成:** Sections 2–6が次数1–5を順に扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** CC BY-NC-ND 4.0。
- **source_scope:** Abstract and Introduction

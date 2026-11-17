---
layout: paper
title: Fano blowups of Grassmannians along sub-Grassmannians
title_ja: 横断的な部分Grassmann多様体に沿うblowupのFano判定
authors: Yuto Masamura
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $\tilde X$ be the successive blowup of the Grassmannian $\operatorname{Gr}(d,n+1)$ with $n\ge3$, in arbitrary characteristic, along sub-Grassmannians of codimension $r_1,\dotsc,r_s\ge2$ that meet transversely. We prove that, if $d\ne2$, then $\tilde X$ is Fano if and only if $\sum_i(r_i-1)\le n$, and we give a similar criterion for $d=2$. As applications, we prove that the successive blowup of $\mathbb{P}^4$ along $s$ planes that meet transversely is Fano if and only if $s\le4$. We also determine when the successive blowup of a smooth quadric fourfold along planes of one family that meet transversely is Fano.
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- positivity
arxiv_id: 2611.19973v1
arxiv_url: https://arxiv.org/abs/2611.19973
arxiv_submitted: '2026-11-15'
arxiv_updated: '2026-11-15'
summary: Grassmann多様体を横断的に交わる複数の部分Grassmann多様体に沿って順次blowupしたとき、Fanoとなるための必要十分条件を与える。中心の余次元と交わりから判定でき、射影4空間や4次元quadricの平面に沿うblowupの問題を任意標数で解く。
abstract_en: ''
summary_en: The paper asks how many transverse centers can be blown up while keeping the anticanonical divisor ample. For Grassmannians, it converts this question into inequalities involving codimensions and intersections of the defining subspaces. The two-dimensional-subspace Grassmannian requires an additional condition. Applications produce Fano fourfolds with large Picard number and resolve specific questions about plane blowups.
abstract_ja: 代数閉体上のGrassmann多様体と、横断的に交わる余次元2以上の部分Grassmann多様体を考える。著者は逐次blowupのFano性を数値条件で特徴づける。通常は余次元から得られる和だけで決まり、2次元部分空間のGrassmann多様体では部分集合の交わりに関する条件も必要となる。射影4空間では横断的な平面が4枚以下の場合に限りFanoとなり、滑らかな4次元quadricでは同一家族の平面に対する別の正確な条件が得られる。
abstract_source_url: https://arxiv.org/abs/2611.19973
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.19973v1](https://arxiv.org/abs/2611.19973)
- **著者:** Yuto Masamura
- **初回投稿日:** 2026-11-15
- **最終更新日:** 2026-11-15
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

blowupは滑らかな多様体を作る基本操作だが、反標準因子の豊富性は容易に失われる。とくに4次元Fano多様体の分類では、互いに交わる平面に沿った逐次blowupが重要な候補となる。

本論文は、Grassmann多様体の部分Grassmann多様体に沿うblowupを統一的に扱う。中心が横断的に交わるという仮定のもと、Fano性を余次元と定義部分空間の交わりに関する必要十分条件へ帰着する。結果は標数0に限られない。

応用として、射影4空間と滑らかな4次元quadricの平面に沿うblowupを分類する。後者からは、複素数体上でPicard数7および8の、曲面の積ではないFano4次元多様体の族が得られる。

## 背景と問題設定

体 $k$ を任意標数の代数閉体、$V$ を次元 $n+1\ge4$ のベクトル空間とする。$X=\operatorname{Gr}(d,V)$ は $d$ 次元部分空間のGrassmann多様体である。部分空間 $W\_i\subset V$ から中心

$$
Z\_i=\operatorname{Gr}(d,W\_i),\qquad
r\_i=\operatorname{codim}\_X Z\_i=d\operatorname{codim}\_V W\_i\ge2
$$

を作る。中心は横断的に交わると仮定し、その狭義変換を順にblowupした多様体を $\widetilde X$ とする。この仮定下では順序に依存せず滑らかで、Picard数は $s+1$ となる。

単一の中心については既知のFano判定がある。本論文の新しさは複数の交わる中心を扱い、Casagrandeが提起した4次元の具体例にも答える点にある。

## 主結果

### Grassmann多様体の数値判定（Theorem 1.1）

$d\ne2$ のとき、必要十分条件は

$$
\widetilde X\text{ がFano}\quad\Longleftrightarrow\quad
\sum\_i(r\_i-1)\le n.
$$

$d=2$ のときは、次の二種類の不等式が必要十分である。

$$
\sum\_i(r\_i-1)\le2n+1,\qquad
\sum\_{i\in I}(r\_i-1)\le n
\quad\text{for every }I\text{ with }\bigcap\_{i\in I}W\_i\ne0.
$$

単一中心の場合は $r\_1\le\dim V$ に戻る。$n\ge3$ という次元条件を落とさないことも重要である。

### 射影4空間の平面blowup（Theorem 1.2）

$\mathbb P^4$ 内の $s$ 枚の平面が横断的に交わるとき、逐次blowupがFanoであることと $s\le4$ は同値である。ここで横断性は、2枚が一点で交わり、3枚に共通点がないという条件になる。一般位置より弱い横断性で十分であり、任意標数で成り立つ。

### 4次元quadricの場合（Theorem 1.3）

滑らかなquadric $Q\simeq\operatorname{Gr}(2,4)$ の同一家族に属する横断的な平面を考え、対応する点を $p\_1,\ldots,p\_s\in\mathbb P^3$ とする。blowupがFanoとなる必要十分条件は

$$
s\le7\quad\text{かつ、どの4点も同一平面に載らない}
$$

である。一般の点なら6枚・7枚でFano、8枚で非Fanoとなる。Introductionは6枚・7枚の例の反標準次数をそれぞれ122、78と記し、曲面の積とは異なる族であることを説明する。

## 証明の見取り図

横断的中心の逐次blowupを、単一中心のblowupのファイバー積として記述し、曲線の持ち上げと例外因子との交点数を制御する。豊富性の方向では、曲線上に引き戻したtautological束の双対のHarder–Narasimhanフィルトレーションを用いる。逆方向ではSchubert計算で中心に交わる直線を見つけ、$d=2$ では次数2の有理曲線も用いて、数値条件が破れた際の障害を作る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.19973)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.19973v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.19973v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction

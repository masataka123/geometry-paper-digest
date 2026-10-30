---
layout: paper
title: The cross quadratic bisectional curvature of Kähler $C$-spaces of classical type
title_ja: 古典型Kähler C空間の交差二次双断面曲率
authors: Run-Qiang Jian, Zhuhong Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper, we show that any K\"{a}hler $C$-space of classical type has nonnegative cross quadratic bisectional curvature and positive dual cross quadratic bisectional curvature. As a consequence, such manifolds are Fano. This confirms a substantial part of a conjecture of Ni-Zheng (Conjecture 1.5 in \cite{NZ}).
topic: differential-geometry
tags:
- curvature
- fano-varieties
- kahler-einstein-metrics
arxiv_id: 2610.39012v1
arxiv_url: https://arxiv.org/abs/2610.39012
arxiv_submitted: '2026-10-28'
arxiv_updated: '2026-10-28'
summary: 古典型Kähler C空間の標準Kähler–Einstein計量に対し、交差二次双断面曲率の非負性とその双対の正値性を示す論文である。第二Betti数を1に制限していた既知の結果を拡張し、Ni–Zhengの曲率予想の古典型の場合を確認する。
abstract_en: ''
summary_en: The article tests curvature conditions intended to recognize homogeneous Kähler geometry. It removes the second-Betti-number restriction from a known result in the classical Lie types. Uniform component estimates provide the route to positivity of the relevant quadratic forms, rather than a direct expansion of the full tensor.
abstract_ja: 本論文は、コンパクト単連結な等質Kähler多様体のモデルであるKähler C空間について、CQBおよび双対CQBと呼ばれる二つの曲率条件を調べる。古典型の標準Kähler–Einstein計量は前者が非負、後者が正となることを示し、その曲率条件からFano性を導く。証明は曲率成分の一様評価とLie代数の型ごとの二次形式の解析を組み合わせる。
abstract_source_url: https://arxiv.org/abs/2610.39012
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.39012v1](https://arxiv.org/abs/2610.39012)
- **著者:** Run-Qiang Jian, Zhuhong Zhang
- **初回投稿日:** 2026-10-28
- **最終更新日:** 2026-10-28
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler C空間は、コンパクト・単連結な等質複素多様体のうち不変Kähler計量を持つもので、Kähler幾何の基本的なモデルである。しかし、等質性を特徴づけるのに適切な曲率の正値条件が何かは単純ではない。

本論文が扱うCQBと双対CQBは、接空間の間の線形写像に曲率テンソルから二次形式を割り当てる条件である。著者らは古典型のKähler C空間の標準Kähler–Einstein計量に対し、CQBの非負性と双対CQBの正値性を示す。

既知の第二Betti数1の場合を超えることで、Ni–Zhengの予想の古典型部分が得られる。一方、一般のKähler C空間すべての予想や、nef接束によるFano多様体の等質性の予想まで解決したとする結果ではない。

## 背景と問題設定

従来の二次双断面曲率QBは、Kähler C空間でも負となる場合があり、等質Kähler幾何の統一的な正値条件としては制約がある。Niは別の二次形式であるCQBと双対CQBを導入した。

点$x$で、$A:T\_x^{0,1}M\to T\_x^{1,0}M$に対するCQB、および逆向きの線形写像に対する双対CQBを考える。正値性は各点のすべての非零写像に対する正値性を意味し、単一の接ベクトル方向だけを調べる条件ではない。Introductionはnef接束を持つFano多様体の等質性予想との動機上の関連を述べるが、両者を同値として扱わない。


具体的には、$T\_x^{1,0}M$のunitary基底$v\_i$を用いて、Definition 1.3は

$$
\operatorname{CQB}(A)=\sum\_{i,j=1}^n\Bigl(R(A(\bar v\_i),\overline{A(\bar v\_i)},v\_j,\bar v\_j)-R(v\_i,\bar v\_j,A(\bar v\_i),\overline{A(\bar v\_j)})\Bigr)
$$

と定める。逆向きの写像を混同しないよう$B:T\_x^{1,0}M\to T\_x^{0,1}M$と書けば、双対は

$$
{}^d\operatorname{CQB}(B)=\sum\_{i,j=1}^n\Bigl(R(\overline{B(v\_i)},B(v\_i),v\_j,\bar v\_j)+R(v\_i,\bar v\_j,\overline{B(v\_i)},B(v\_j))\Bigr)
$$

である。二つの式では写像の向き、複素共役の位置、第二項の符号が異なる。

## 主結果

### 古典型での曲率符号（Theorem 1.5）

古典型のKähler C空間に標準Kähler–Einstein計量を入れると、

$$
\operatorname{CQB}\ge0,\qquad {}^d\operatorname{CQB}>0
$$

が成り立つ。すなわちIntroductionのConjecture 1.4が古典型の場合に成立する。CQBは非負という結論であり、正への強化ではない。実際、Introductionは$\mathbb P^1$束が正のCQBを持てないという既知の制約にも触れる。

従来は古典型で$b\_2=1$、複素次元2以上の場合などが知られていた。本論文は古典型における第二Betti数の制約を取り除く点に新規性がある。

### 曲率からのFano性（Corollary 1.6）

古典型Kähler C空間はFanoである。ここでは既知のNi–Zhengの曲率判定と主定理を組み合わせる。対象が等質Kähler幾何の既知のモデルであることと、今回の曲率条件からFano性を導くことは区別される。

## 証明の見取り図

CQBと双対CQBを線形写像$A$の行列成分の二次形式へ書き直す。係数にはEinstein定数と曲率成分が含まれるため、著者らはまず曲率成分に対する二つの一様評価を準備する。

その評価を使い、古典Lie代数の型ごとに係数を解析して二次形式の符号を調べる。特にC型の一部では精密な上界が必要となり、対応する技術的議論は付録に置かれている。Introductionでは、同じ係数解析から双対CQBの正値性も導くという構成が説明されている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.39012)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.39012v1) — Section 1, pp. 1–4（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Definition 1.3, Conjecture 1.4, Theorem 1.5, Corollary 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.39012v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction

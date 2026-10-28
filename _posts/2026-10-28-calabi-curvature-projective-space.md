---
layout: paper
title: A characterization of complex projective space via the Calabi curvature operator
title_ja: Calabi曲率作用素による複素射影空間の特徴づけ
authors: Hasan M. El-Hasan, Xiaolong Li, Jan Nienhaus, Peter Petersen, James Stanfield, Matthias Wink
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We prove a Tachibana-type result for K\"ahler-Einstein manifolds isolating complex projective space based on its Calabi curvature operator. The proof uses a new Bochner formula expressing the Lichnerowicz curvature term via the Calabi curvature operator. This resolves one of the problems posed at the AIM workshop "The Bochner Technique'' (May 2026).
topic: differential-geometry
tags:
- curvature
- kahler-einstein-metrics
- uniformization
arxiv_id: 2608.23778v1
arxiv_url: https://arxiv.org/abs/2608.23778
arxiv_submitted: '2026-08-24'
arxiv_updated: '2026-08-24'
summary: 閉Kähler–Einstein多様体に対し、Calabi曲率作用素をRicci定数でずらした作用素の部分的非負性から、複素射影空間または平坦性を導く。Lichnerowicz曲率項をCalabi作用素で表す新しいBochner公式が、等長型の剛性を支える。
abstract_en: ''
summary_en: The paper gives a spectral rigidity criterion for closed Kähler–Einstein manifolds. It imposes partial nonnegativity on a shifted Calabi operator rather than on the operator alone. An explicit expression for the curvature contribution in a Bochner formula turns that condition into a classification up to isometry. The authors distinguish this geometric result from still-open algebraic sign questions.
abstract_ja: 複素次元n≥2の閉Kähler–Einstein多様体でRic(g)=λg、λ≥0とする。Calabi曲率作用素からλ/(n+1)倍の恒等作用素を引いたものが2(n+1)/5-非負なら、計量はFubini–Study型の複素射影空間または平坦となる。証明の中心はCalabi作用素の固有値と三次traceを用いたLichnerowicz曲率項の新公式である。
abstract_source_url: https://arxiv.org/abs/2608.23778
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.23778v1](https://arxiv.org/abs/2608.23778)
- **著者:** Hasan M. El-Hasan, Xiaolong Li, Jan Nienhaus, Peter Petersen, James Stanfield, Matthias Wink
- **初回投稿日:** 2026-08-24
- **最終更新日:** 2026-08-24
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲率作用素の固有値にどの程度の正値性を課せば、多様体の等長型まで決まるのか。本論文は、閉Kähler–Einstein多様体に対してCalabi曲率作用素を使うTachibana型の剛性定理を証明する。

条件はCalabi作用素そのものの非負性ではなく、Ricci定数によってずらした作用素の「小さい固有値の部分和」の非負性である。この条件から、複素射影空間のFubini–Study計量か平坦計量に限られる。

そのために、曲率テンソルのBochner公式に現れる零階項をCalabi作用素で書き直す。コホモロジーの消滅だけでなく等長型を回収する一方、任意の代数的Kähler–Einstein曲率テンソルに対する符号問題は残される。

## 背景と問題設定

$S^{2,0}\subset T^{1,0}\otimes T^{1,0}$上の自己共役作用素$\mathcal C$がCalabi曲率作用素である。Kähler曲率の対称性により

$$
\langle\mathcal C(Z\_\alpha\otimes Z\_\beta),\overline Z\_\gamma\otimes\overline Z\_\delta\rangle
=R\_{\alpha\bar\gamma\beta\bar\delta}
$$

から定義される。Fubini–Study計量では恒等作用素の定数倍となる。

固有値$\sigma\_1\leq\cdots\leq\sigma\_m$の自己共役作用素が$k$-非負とは

$$
\sigma\_1+\cdots+\sigma\_{\lfloor k\rfloor}
+(k-\lfloor k\rfloor)\sigma\_{\lfloor k\rfloor+1}\geq0
$$

であることをいう。整数でない$k$にも定義される部分和条件である。

## 主結果

### 等長型の剛性（Theorem A）

$(M,g)$を複素次元$n\geq2$の閉Kähler–Einstein多様体、$\operatorname{Ric}(g)=\lambda g$、$\lambda\geq0$とする。

$$
\mathcal C-\frac{\lambda}{n+1}\operatorname{id}
\quad\text{が}\quad\frac{2(n+1)}5\text{-非負}
$$

なら、$(M,g)$はFubini–Study計量を持つ複素射影空間、または平坦である。Einstein定数に応じた計量の尺度を含めて理解する。

$\mathcal C$の平均固有値は$2\lambda/(n+1)$であり、上のずらしはtraceを半分だけ除く操作に当たる。一般の代数的作用素について、$\mathcal C$の全固有値が正でもこの条件を保証しない点に注意が必要である。

### Bochner公式の曲率項（Theorem B）

Kähler–Einstein多様体で$\lambda\in\mathbb R$とし、$\mathcal C(S\_A)=\sigma\_AS\_A$となる$S^{2,0}$のユニタリ固有基底を取る。このとき

$$
\operatorname{Ric}\_L(R,R)
=4\sum\_A\sigma\_A|S\_AR|^2
+16\operatorname{tr}(\mathcal C^3)-16\lambda\operatorname{tr}(\mathcal C^2)
$$

が成り立つ。$S\_AR$は対称テンソルの曲率テンソルへの自然な作用である。曲率が調和的であるKähler–Einsteinの場合のBochner公式

$$
\Delta\_{\mathbb C}|R\_{\alpha\bar\beta\gamma\bar\delta}|^2
=|\nabla\_\mu R\_{\alpha\bar\beta\gamma\bar\delta}|^2
+|\nabla\_{\bar\mu}R\_{\alpha\bar\beta\gamma\bar\delta}|^2
+\frac18\operatorname{Ric}\_L(R,R)
$$

の零階項を、固有値と作用素のtraceから解析できるようにする。

### 未解決の代数的符号問題

IntroductionのQuestion Aは、$\mathcal C$自体の$k$-非負性が任意の代数的Kähler–Einstein曲率テンソルについて$\operatorname{Ric}\_L(R,R)\geq0$を強制する最大の$k(n)$を問う。全固有値非負の場合の符号さえ、Problem Bとして残す。閉多様体の分類から得られる大域的制約と、任意の代数的テンソルの性質を混同しない。

## 証明の見取り図

新しい公式の項を$\mathcal C-\lambda/(n+1)\operatorname{id}$に関して組み直し、部分的非負性をBochner法に投入する。従来のCalabi作用素による原始コホモロジーの消滅とは異なり、曲率テンソルそのものを扱うことが等長型の剛性につながる。Introductionは作用素だけで零階項の符号を直接読む難しさも強調している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2608.23778)
- **Introduction:** [PDF](https://arxiv.org/pdf/2608.23778v1) — Section 1, pp. 1–3（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems A–B；Question AとProblem Bは未解決問題
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2608.23778v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction

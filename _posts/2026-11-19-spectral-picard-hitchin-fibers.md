---
layout: paper
title: Picard Groups of Spectral Varieties and Moduli of Higgs Sheaves
title_ja: スペクトル多様体のPicard群から見るHitchinファイバー
authors: Xiaoyu Su, Bin Wang
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study moduli spaces of Higgs sheaves valued in line bundles and the associated Hitchin maps on surfaces. We first work out Picard groups of generic (very general) spectral varieties which holds for dimension of at least 2, i.e., a Noether--Lefschetz type theorem for spectral varieties. We then apply these Picard-group calculations to obtain a necessary and sufficient condition for the non-emptiness of generic Hitchin fibers in the range where the spectral Noether--Lefschetz theorem applies. Then we move on to detect the geometry of the moduli spaces of Higgs sheaves as the second Chern class varies.
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- moduli
- chern-classes
arxiv_id: 2409.10296v2
arxiv_url: https://arxiv.org/abs/2409.10296
arxiv_submitted: '2024-09-16'
arxiv_updated: '2026-11-17'
summary: スペクトル被覆への引き戻しが直線束をすべて与える条件を示す。複素射影曲面では、これを用いてHiggs層のHitchin写像の一般ファイバーが空でないための条件をChern類で表す。
abstract_en: We study moduli spaces of Higgs sheaves valued in line bundles and the associated Hitchin maps on surfaces. We first work out Picard groups of generic (very general) spectral varieties which holds for dimension of at least 2, i.e., a Noether--Lefschetz type theorem for spectral varieties. We then apply these Picard-group calculations to obtain a necessary and sufficient condition for the non-emptiness of generic Hitchin fibers in the range where the spectral Noether--Lefschetz theorem applies. Then we move on to detect the geometry of the moduli spaces of Higgs sheaves as the second Chern class varies.
summary_en: ''
abstract_ja: Higgs場の特性多項式を固定すると、その固有値が定めるスペクトル曲面上の階数一の層を調べられる。著者らは行列式が基底から引き戻されることを使って残る自由度を点の配置で記述し、一般ファイバーからは見えないモジュライ空間の成分も捉える。
abstract_source_url: https://arxiv.org/abs/2409.10296
license_name: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
license_url: http://creativecommons.org/licenses/by-nc-sa/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2409.10296v2](https://arxiv.org/abs/2409.10296)
- **著者:** Xiaoyu Su, Bin Wang
- **初回投稿日:** 2024-09-16
- **最終更新日:** 2026-11-17
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

## 要約

曲線上のHitchin系では、一般ファイバーの幾何がスペクトル曲線の直線束と結び付く。基底を曲面に替えると、階数一の捩れのない層は直線束と有限部分スキームのイデアルという二種類のデータを持つ。

論文はまず、スペクトル多様体の直線束がどこから来るかを決定する。この結果を用いると、一般の特性多項式を持つHiggs層が指定されたChern類で存在するかを判定できる。

ただし一般ファイバーだけでモジュライ空間全体は尽くせない。第二Chern数が十分大きくなると、一般ファイバー上の描像には現れない既約成分が存在する。

## 背景と問題設定

複素数体上の滑らかな射影多様体 $X$ と非常に豊富な直線束 $L$ を固定する。対象は捩れのない層 $E$ と写像 $\theta:E\to E\otimes L$ の対である。特性多項式の係数がHitchin基底の点 $s$ を定め、固有値の方程式が有限被覆 $\pi\_s:X\_s\to X$ を定める。

## 主結果

### 直線束の降下（Theorem 1.4）

$\dim X\ge3$ のとき、滑らかなスペクトル多様体について $\pi\_s^\ast :\operatorname{Pic}(X)\to\operatorname{Pic}(X\_s)$ は同型である。$\dim X=2$ では階数 $r\ge4$ で、可算個の真の閉部分集合の外にある非常に一般の $s$ に対して同じ結論を得る。

### 一般ファイバーの非空性（Theorem 1.5）

複素曲面で非常に一般の被覆が上のPicard群同型を満たすとする。階数 $r$、Chern類 $c\_1,c\_2$ を持つGieseker半安定Higgs層の一般ファイバーが空でないための必要十分条件は

$$
r\delta=c\_1+\frac{r(r-1)}{2}c\_1(L),
$$

$$
(r-1)c\_1^2-2rc\_2=\frac{r^2(r^2-1)}{12}c\_1(L)^2-2r\pi\_{s\ast }[D]
$$

を解けることである。$\delta$ は $X$ 上の直線束の第一Chern類、$[D]$ は一般のスペクトル曲面上の非負次数の整係数四次コホモロジー類である。このとき写像は全射となり、基底の非空なZariski開集合上で滑らかになる。

### 空性の境界と可約性（Theorem 1.7）

第一式が解けるとき、境界値は整数

$$
b=\frac{r-1}{2r}c\_1^2-\frac{r(r^2-1)}{24}c\_1(L)^2
$$

である。$c\_2<b$ ならモジュライ空間そのものが空であり、$c\_2=b$ なら基礎層のHarder–Narasimhan次数片はすべて一般階数一を持つ。さらに非常に一般の被覆でPicard群同型を仮定すると、十分大きな $c\_2$ ではモジュライ空間は可約となる。

## 証明の見取り図

スペクトル多様体は射影束によるコンパクト化の中で豊富な因子とは限らない。そこでビッグかつ基点を持たない線形系に対するNoether–Lefschetz理論を用いる。スペクトル対応の下で階数一の層を行列式と点のイデアルに分けると、第一の等式が行列式の制約、第二の等式が点の長さの制約になる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2409.10296)
- **Introduction:** [PDF](https://arxiv.org/pdf/2409.10296v2) — §1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.4, 1.5, 1.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2409.10296v2
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
- **source\_scope:** Abstract and Introduction

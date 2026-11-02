---
layout: paper
title: Uniformization of compact Kähler Threefolds of Zero Kodaira Dimension
title_ja: 普遍被覆が等しいKähler三次元多様体と小平次元ゼロ
authors: Anna Choblet
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Given two smooth compact K\"ahler threefolds $X$ and $Y$ whose universal covers are biholomorphic, we show that $\kappa(X) = 0$ if and only if $\kappa(Y) =0$.
topic: algebraic-geometry
tags:
- uniformization
- minimal-model-program
- birational-geometry
- fundamental-groups
arxiv_id: 2610.40950v1
arxiv_url: https://arxiv.org/abs/2610.40950
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-10-29'
summary: 同じ複素多様体を普遍被覆に持つコンパクトKähler三次元多様体で、小平次元がゼロであることが共有されると示す。三次元の極小モデル理論とAlbanese写像を使い、普遍被覆から標準束の大域的性質を読み取る問題の一場合を解決する。
abstract_en: Given two smooth compact K\"ahler threefolds $X$ and $Y$ whose universal covers are biholomorphic, we show that $\kappa(X) = 0$ if and only if $\kappa(Y) =0$.
summary_en: ''
abstract_ja: 滑らかなコンパクトKähler三次元多様体XとYの普遍被覆が双正則同値であるとき、κ(X)=0とκ(Y)=0が同値になることを示す。
abstract_source_url: https://arxiv.org/abs/2610.40950
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.40950v1](https://arxiv.org/abs/2610.40950)
- **著者:** Anna Choblet
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

普遍被覆が双正則同値な二つのコンパクト複素多様体は、共通の複素多様体を異なる群作用で割ったものと見なせる。しかし群作用が異なれば、大域的な標準束の切断を直接比較することは容易ではない。本論文は、この状況で小平次元がどこまで一致するかを問う。

著者は、滑らかなコンパクトKähler三次元多様体について、一方の小平次元がゼロなら他方もゼロとなることを示す。任意の小平次元や任意の次元についての一般予想を一度に解決するのではなく、三次元のゼロの場合に焦点を絞った結果である。

証明の骨格には、三次元で利用できる極小モデル・プログラムとAlbaneseファイブレーションの構造がある。普遍被覆上で二つの群作用の不変量を直接同定する代わりに、ファイブレーションを共通の被覆構造と両立させる。

## 背景と問題設定

共通の普遍被覆を $D$ として、$\widetilde X\simeq D\simeq\widetilde Y$ を考える。曲線では一意化定理により普遍被覆と小平次元の関係が明確である。一方、K3曲面とアーベル曲面はともに小平次元ゼロだが普遍被覆は異なり、逆方向の特徴づけを高次元でそのまま期待することはできない。

IntroductionのConjecture 0.1は、滑らかなコンパクトKähler多様体の普遍被覆が双正則同値なら $\kappa(X)=\kappa(Y)$ となるという予想である。Kähler条件は本質的で、非KählerのInoue曲面を用いると異なる小平次元を持つ例が生じる。有限基本群の場合は共通の有限エタール被覆から結論できるが、一般には無限群の作用を扱う難しさが残る。

## 主結果

### 小平次元ゼロの保存（Main Theorem）

$X,Y$ が滑らかなコンパクトKähler三次元多様体で、普遍被覆が双正則同値なら、

$$
\widetilde X\simeq\widetilde Y
\quad\Longrightarrow\quad
\bigl(\kappa(X)=0\ \Longleftrightarrow\ \kappa(Y)=0\bigr)
$$

が成り立つ。本文のIntroductionでは番号を付けずMain Theoremとして述べられている。

これはゼロ小平次元という標準束の大域的性質が、普遍被覆の複素解析的構造によって共有されるという主張である。$X$ と $Y$ 自体の同型や、両者が必ずトーラスの有限商であることは結論していない。普遍被覆が $\mathbb C^n$ である場合のIitaka予想やNakayamaの結果は、背景となるより特殊な一意化問題として区別される。

## 証明の見取り図

Introductionでは、小平次元ゼロの $X$ のAlbanese写像を全射かつ連結ファイバーを持つ写像として調べる。論文前半で、このファイブレーションを普遍被覆の配置と両立させるための道具を準備する。

その後、極小モデル $X\dashrightarrow X\_{\min}$ を取り、Albanese像の次元ごとに場合分けする。この区分は極小モデルのBeauville–Bogomolov分解の可能性に対応する。著者は極小モデルの存在への依存を明示し、高次元への一般化を既に得たものとはしていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.40950)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.40950v1) — Introduction, pp. 1–2
- **Introduction中で言及された主要結果:** Main Theorem; Conjectures 0.1, 0.2は予想、Theorem 0.3は先行研究
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.40950v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction

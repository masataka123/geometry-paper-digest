---
layout: paper
title: Stabilizing Parabolic Vector Bundles
title_ja: isomonodromic変形による放物ベクトル束の安定化
authors: Andy Ramirez-Cote
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: For an irreducible parabolic flat vector bundle of rank $r < 2\sqrt{g}$ on a genus $g$ curve, we prove that an analytically general isomonodromic deformation is stable. This refines Landesman-Litt's semistability result for bundles of rank $< 2\sqrt{g+1}$. The proof applies the non-generically globally generated (non-GGG) lemma to establish infinitesimal obstructions to extending destabilizing subbundles of semistable bundles.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- stability
arxiv_id: 2611.19219v1
arxiv_url: https://arxiv.org/abs/2611.19219
arxiv_submitted: '2026-11-14'
arxiv_updated: '2026-11-14'
summary: 既約な局所系に対応する放物平坦束を、monodromyを保ちながら曲線とともに変形する。階数が種数の平方根で与えられる範囲なら、解析的一般の変形で半安定性を超えて安定性を得て、すべての真部分束の放物次数に明示的な負の上界を与える。
abstract_en: For an irreducible parabolic flat vector bundle of rank $r < 2\sqrt{g}$ on a genus $g$ curve, we prove that an analytically general isomonodromic deformation is stable. This refines Landesman-Litt's semistability result for bundles of rank $< 2\sqrt{g+1}$. The proof applies the non-generically globally generated (non-GGG) lemma to establish infinitesimal obstructions to extending destabilizing subbundles of semistable bundles.
summary_en: ''
abstract_ja: 種数 $g$ の曲線上の既約な放物平坦ベクトル束について、階数 $r<2\sqrt g$ なら解析的一般のisomonodromic変形が安定になることを証明する。これはLandesman–Littの半安定性の結果を、やや狭い階数範囲で安定性へ強める。証明はnon-GGG補題を用い、半安定束の不安定化部分束が変形に沿って延びることへの無限小障害を構成する。
abstract_source_url: https://arxiv.org/abs/2611.19219
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.19219v1](https://arxiv.org/abs/2611.19219)
- **著者:** Andy Ramirez-Cote
- **初回投稿日:** 2026-11-14
- **最終更新日:** 2026-11-14
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

平坦接続のmonodromy表現を固定しても、曲線の複素構造を動かすと、その上の正則ベクトル束の安定性は変わり得る。isomonodromic変形によって束を安定化できるかという問題は、局所系と代数幾何的な束のモジュライの接点にある。

本論文は、既約な放物平坦束の階数が種数に比べ十分小さい場合、解析的一般の変形で放物安定になることを示す。単なる半安定性ではなく、任意の非零真部分束の放物次数を明示的に負へ押し下げる。

証明では、もし不安定化部分束が変形しても残るなら、その部分束が一次変形のすべての方向へ延びなければならないことを利用する。non-GGG補題からこの延長への数値的障害を導く。ただし階数条件の最適性やvery stabilityへの拡張は未解決として残る。

## 背景と問題設定

$(C,D)$ は種数 $g\ge2$ の滑らかな射影曲線と標点の被約因子の組である。$C\setminus D$ 上の既約局所系に対応するregular flat parabolic bundleを $(V\_\star,\nabla)$ とする。曲線・標点・束を変形しつつ、接続のmonodromyを保つのがisomonodromic変形である。

Landesman–Littは、既約性だけでは半安定な変形の存在も一般には保証できないことと、$r<2\sqrt{g+1}$ の範囲で半安定性が得られることを示した。本論文は境界を $r<2\sqrt g$ として結論を安定性へ強める。階数2にはより強い先行結果もあり、その既知部分と新しい一般階数の結果を区別する。

## 主結果

### 安定性と放物次数の定量評価（Theorem 1.1）

階数 $r$ が

$$
r<2\sqrt g
$$

を満たせば、解析的一般のisomonodromic変形の $V\_\star$ は安定となる。さらにそのすべての非零真放物部分束 $V'\_\star$ は

$$
\operatorname{par\text{-}deg}V'\_\star
\le-\frac{g-\lfloor r^2/4\rfloor}{r}
$$

を満たす。階数条件により右辺は厳密に負であり、半安定性に残り得る次数0の部分束を排除する定量的な結論になっている。

「解析的一般」とは、標点付き曲線のモジュライ上で局所的に、nowhere denseな閉解析部分集合の外という意味である。任意の変形で安定になるとも、例外が存在しないとも述べていない。

## 証明の見取り図

Atiyah束とその放物・フィルトレーション付き版を用い、曲線と束の一次変形に対して部分束やフィルトレーションを延長する障害を記述する。解析的なisomonodromic変形を形式的変形と比較し、部分束が族に沿って残るなら、すべての一次方向に延長できることを導く。

次にLandesman–Littのnon-generically globally generated補題を適用する。この補題はフィルトレーションの数値条件を束の生成性へ結び付け、問題の部分束が存続することを妨げる。こうして安定性だけでなく、定理中の次数上界も得る。

Introductionは、この $2\sqrt g$ 型の境界が最適かは未解決であり、現在の手法の制約を反映している可能性があると述べる。very stabilityへの拡張も、階数3以上では未解決の課題として区別される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.19219)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.19219v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.19219v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction

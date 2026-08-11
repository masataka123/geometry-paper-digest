---
layout: paper
title: "K-stability of complete intersections"
title_ja: "完全交叉のK安定性"
authors: "Livia Campo, Kristin DeVleming, Tiago Duarte Guerreiro"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2608.09293v1"
arxiv_url: "https://arxiv.org/abs/2608.09293"
arxiv_submitted: "2026-08-10"
arxiv_updated: "2026-08-10"
summary: >-
  一般のFano完全交叉が任意の多重次数・次元でK多重安定であり、射影空間と滑らかな二次超曲面を除けばK安定であることを示す。分岐被覆型の特別な完全交叉を構成して安定性を証明し、族におけるK安定性の開性から一般の元へ移すことで、高次元で未解決例の多かった問題に一括して答える。
abstract_en: ""
summary_en: >-
  The paper establishes K-polystability for a general Fano complete intersection in every dimension and multidegree. Except for projective space and a smooth quadric, the general member is K-stable. Related conclusions are obtained for a class of smooth weighted complete intersections. The argument constructs suitably structured stable members and then uses openness in families to reach general members.
abstract_ja: >-
  任意の多重次数と次元について、一般のFano完全交叉がK多重安定であることを証明する。射影空間または二次超曲面と同型でない場合にはK安定性まで得られる。さらに、一定の滑らかな重み付き完全交叉についても対応する結果を示す。
abstract_source_url: "https://arxiv.org/abs/2608.09293"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.09293](https://arxiv.org/abs/2608.09293)
- **著者:** Livia Campo, Kristin DeVleming, Tiago Duarte Guerreiro
- **初回投稿日:** 2026年8月10日
- **最終更新日:** 2026年8月10日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

K安定性は、Fano多様体上のKähler–Einstein計量の存在を代数的に捉える概念である。しかし、個々の高次元Fano多様体がK安定かを判定することは難しく、完全交叉についても少数の次数・指数でしか一般的結果がなかった。

本論文の中心結論は、一般の $n$ 次元Fano完全交叉 $X\subset\mathbb P^{n+k}$ が、多重次数 $(r_1,\ldots,r_k)$ によらずK多重安定になるというものである。さらに $X$ が $\mathbb P^n$ または滑らかな二次超曲面でなければK安定である。「すべての滑らかな元」についての予想を解くものではないが、各型の一般点について全範囲を統一的に扱う。

結果は特定の重み付き射影空間内の一般のFano重み付き完全交叉にも拡張される。また、反標準体積を固定したKモジュライ空間に、完全交叉を一般点とする既約成分が存在することも従う。

証明では、族の中でK安定性が開条件であることを利用する。そのため各多重次数について一つのK安定なモデルを、分岐被覆として帰納的に構成することが核心となる。

## 背景と問題設定

滑らかなFano多様体ではK多重安定性とKähler–Einstein計量の存在が同値であり、この対応はklt Fano多様体にも拡張されている。一方、高次元では変形族の一般元についてさえ判定済みの例が限られていた。

論文は、次数 $d$ の滑らかなFano超曲面がK多重安定で、$d\geq3$ ならK安定であるという Conjecture 1.1 と、その完全交叉版 Conjecture 1.2 を提示する。後者は $k\geq2$、$r_i\geq2$ の滑らかなFano完全交叉を対象とする。本論文は「一般の元」に限ってこの期待を全型で確立する。

## 主結果

### 主定理（Theorem 1.3）

一般の $n$ 次元Fano完全交叉

$$
X\subset\mathbb P^{n+k},\qquad \operatorname{type}(X)=(r_1,\ldots,r_k)
$$

はK多重安定である。さらに $X\not\cong\mathbb P^n$ かつ $X$ が滑らかな二次超曲面でなければ、$X$ はK安定である。ここで「一般」は完全交叉をパラメータ化する族の一般点を意味し、任意の滑らかな完全交叉を主張しているわけではない。

### Kモジュライへの系（Corollary 1.4）

$n\geq2$ かつ $n+k+1>r_1+\cdots+r_k$ とする。このとき反標準体積

$$
v=(n+k+1-(r_1+\cdots+r_k))^n r_1\cdots r_k
$$

に対するKモジュライ空間 $M^K_{n,v}$ は空でなく、一般点が型 $(r_1,\ldots,r_k)$ の滑らかな完全交叉を表す既約成分を含む。

### 重み付き完全交叉（Theorem 1.5）

$$
X\subset\mathbb P(1^{n+1},a_{n+1},\ldots,a_{n+k})
$$

を型 $(r_1,\ldots,r_k)$ の一般の $n$ 次元Fano重み付き完全交叉とし、各 $i$ で $a_{n+i}\mid r_i$ と仮定する。このとき $X$ はK多重安定で、射影空間と滑らかな二次超曲面を除けばK安定である。

## 証明の見取り図

K安定性の族における開性により、各多重次数について一つのK安定な完全交叉を作ればよい。論文はまず、方程式が $f_i+x_{n+i}^{r_i/a_{n+i}}=0$ という形を持つ重み付き完全交叉を調べ、射影空間上の分岐因子の対数的安定性から全空間のK多重安定性を導く。

別の帰納法では、最後の方程式を巡回被覆として扱い、低余次元の完全交叉 $Y$ と分岐部分 $B_Y$ のK多重安定性（または適切な対のlog canonical性）から $X$ のK多重安定性を得る。一般の方程式なら $X,Y,B_Y$ を滑らかに選べるため、余次元に関する帰納が閉じる。最後に、例外を除く滑らかな完全交叉の自己同型群が有限である既知結果を用い、K多重安定性をK安定性へ強める。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.09293](https://arxiv.org/abs/2608.09293)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.3, 1.5, 1.6, 1.7; Corollary 1.4
- **論文構成の説明:** Introduction, pp. 2–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
